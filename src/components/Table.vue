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
        <Table :columns="columns" :data="targetList">
            <template v-slot:action="ctx">
                <ro-toolbar :option="ctx.column" :ctx="ctx"></ro-toolbar>
            </template>
        </Table>
        <div class="page" v-if="!status.loading">
            <ro-page :option="page" @signal="pageSignal"></ro-page>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        option: Object
    },
    data() {
        const page = {
            current: 1,
            size: 10,
            ...this.option.page
        };

        return {
            status: {
                loading: false
            },
            list: [], //源数据
            targetList: [], //视图数据,
            localPage: false,
            servicePage: false, //是否是服务器分页
            page
        };
    },
    computed: {
        columns() {
            const tmp = this.option.columns.map(item => {
                if (item.type === "operate") {
                    item.slot = "action";
                }
                return item;
            });

            return tmp || {};
        }
    },
    watchs: {},
    methods: {
        getList() {
            this.status.loading = true;
            var data = this.option.data;
            this.servicePage = false;
            window.Rocket.generateList(data, this).then(res => {
                if (window._.isArray(res)) {
                    this.list = res;
                    this.page.total = this.list.length;
                } else if (window._.isObject(res)) {
                    this.servicePage = true;
                    this.list = res.data;
                    this.page.total = parseInt(res.total);
                }
                this.dealData();
            });
        },
        dealData() {
            this.status.loading = false;

            if (!this.option.localPage) {
                return (this.targetList = this.list);
            }
            this.targetList = this.list.slice(
                (this.page.current - 1) * this.page.size,
                this.page.current * this.page.size
            );
        },
        pageSignal(type, num) {
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
        refresh() {
            this.getList();
        }
    },
    mounted() {
        this.getList();
    }
};
</script>
