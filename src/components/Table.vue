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
            :data="list"
            @on-selection-change="selectChange"
        >
        </Table>
        <div class="page">
            <ro-page :option.sync="pageOpt" @signal="pageSignal"></ro-page>
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
        option: {
            type: Object
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
            filter: {
                _limit: 10,
                _page: 1
            },
            servicePage: false,
            total: 0,
            page: 1
        };
    },
    computed: {
        showColumns() {
            let columns = this.option.columns,
                showIndex = this.option.showIndex,
                multiCheck = this.option.multiCheck;

            columns = Helper.initColumns(columns);

            if (showIndex) {
                columns.unshift({ type: "index", width: 60, align: "center" });
            }
            if (multiCheck) {
                columns.unshift({
                    type: "selection",
                    width: 50,
                    align: "center"
                });
            }
            return columns.map(item => {
                if (item.type === "operate") {
                    item = Helper.initTableOperate.call(this, item);
                }
                return item;
            });
        },
        pageOpt() {
            return {
                current: this.filter._page,
                size: this.filter._limit,
                total: this.total
            };
        }
    },
    methods: {
        init() {},
        getList(filter = {}) {
            this.filter = {
                ...this.filter,
                ...filter,
                _page: 1
            };
            this.refresh();
        },
        dealData() {},
        refresh() {
            Helper.generateFunction(this.option.data, this.filter).then(res => {
                if (res) {
                    this.list = res.data || [];
                    this.total = res.total || 0;
                }
            });
        },
        search(value) {
            this.getList({ name_like: value });
        },
        selectChange(rows) {
            this.selectRows = rows;
            this.$emit("signal", "selectChange", {
                columns: this.columns,
                data: this.list,
                rows
            });
        },
        pageSignal(type, num) {
            this.filter = {
                ...this.filter,
                [type]: num
            };
            this.refresh();
        },
        toolbarSignal(type, ctx) {},
        create() {
            console.dir(arguments);
        }
    },
    mounted() {
        this.getList();
    }
};
</script>
