<!--
options : {
    showIndex : true,//是否显示序号
	multiCheck: false,//是否多选
	localPage : false,//是否本地分页
	sortable : false,//排序(本地分页时有用)
	columns : [{
		title : '类型',//列头
		name : 'type',//数据项属性名
		enum : 'sex'//枚举类型,
		format : function/DATETIEM/DATE //格式化
	}],
    data:[{}] //源数据如果是函数则返回值为[{}],

    page:{
        current:1
        total: 10,
        size:10,
        sizeOpt:[10,20,30]
    }
}
-->
<template>
    <div class="ro-table">
        <Table
            :columns="showColumns"
            :data="targetList"
            @on-selection-change="selectChange"
        >
        </Table>
        <div class="page" v-if="showPage">
            <ro-page :option.sync="pageOption" @signal="pageSignal"></ro-page>
        </div>
    </div>
</template>
<script>
import _ from "lodash";
import Helper from "../commons/Helper";
import Store from "../commons/Store";
const LOCAL = "local";
const SERVICE = "service";

export default {
    components: {},
    props: {
        columns: {
            type: [Object, String, Function, Array]
        },
        data: {
            type: [Object, String, Function, Array]
        },
        store: {
            type: [Object, String, Function]
        },
        toolbar: {
            type: [Object, String, Function]
        },

        pagination: {
            type: Boolean,
            default: true
        },
        pageSize: {
            type: [Number],
            default: 10
        },
        showIndex: {
            type: Boolean,
            default: false
        },
        multiCheck: {
            type: Boolean,
            default: false
        },
        localPage: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            status: {
                loading: false
            },
            list: [], //源数据
            targetList: [], //视图数据,
            selectRows: [],
            filter: {},
            servicePage: false,
            total: 0,
            page: 1
        };
    },
    computed: {
        showColumns() {
            let columns = Helper.initColumns(this.columns);

            if (this.showIndex) {
                columns.unshift({ type: "index", width: 60, align: "center" });
            }
            if (this.multiCheck) {
                columns.unshift({
                    type: "selection",
                    width: 50,
                    align: "center"
                });
            }
            return columns
                .map(item => {
                    if (item.type === "operate") {
                        item = Helper.initTableOperate.call(this, item);
                    }
                    return item;
                })
                .filter(item => {
                    if (item.premise === undefined) {
                        item.premise = true;
                    }
                    return _.isFunction(item.premise)
                        ? item.premise.call(this)
                        : item.premise;
                });
        },
        showPage() {
            return this.localPage;
        },
        pageOption() {
            return {
                current: this.page || 1,
                size: this.pageSize || 10,
                total: this.total
            };
        }
    },
    methods: {
        getList() {
            this.status.loading = true;
            Promise.resolve(this.data)
                .then(res => {
                    if (res) {
                        if (_.isString(res)) {
                            const store = new Store(res);
                            return store.get();
                        }
                        return Helper.generateFunction(res, this);
                    } else if (this.store) {
                        return this.store.get({});
                    }
                    return [];
                })
                .then(res => {
                    if (_.isArray(res)) {
                        this.list = res;
                        this.total = this.list.length;
                    } else if (_.isObject(res)) {
                        this.list = res.data;
                        this.total = res.total;
                    }
                    this.dealData();
                });
        },
        dealData() {
            this.status.loading = false;
            if (!this.localPage) {
                //服务器端分页
                return (this.targetList = this.list);
            } else {
                // 本地分页
                this.targetList = Helper.filterList(
                    this.list,
                    this.filter,
                    this.page.current,
                    this.page.size
                );
            }
        },
        pageSignal(type, num) {
            this.selectRows = [];
            if (type === "size") {
                this.page.size = num;
                this.page.current = 1;
            } else {
                this.page.current = num;
            }

            if (this.servicePage) {
                this.getList();
            } else {
                this.dealData();
            }
        },
        refresh(filter) {
            if (filter) {
                this.page.current = 1;
                if (_.isPlainObject(filter)) {
                    this.filter = filter;
                } else {
                    this.filter = {};
                }
            }
            if (this.servicePage) {
                this.getList();
            } else {
                this.dealData();
            }
        },
        selectChange(rows) {
            this.selectRows = rows;
            this.$emit("signal", "selectChange", {
                columns: this.columns,
                data: this.list,
                rows
            });
        },
        toolbarSignal(type, ctx) {
            let tool;
            this.tools.forEach(item => {
                if (item.signal === type) {
                    tool = item;
                }
            });
            Promise.resolve()
                .then(() => {
                    return tool.operate.call(this, ctx);
                })
                .then(res => {
                    if (ctx.on === "ok") {
                        this.$Modal.remove();
                    }
                    this.refresh();
                });
        }
    },
    mounted() {
        this.getList();
    }
};
</script>
