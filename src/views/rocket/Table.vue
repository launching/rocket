<style lang="scss">
.rov-table {
    margin-top: 10px;
}
</style>
<template>
    <div class="rov-table">
        <h1>TABLE</h1>
        <ro-table
            ref="table"
            :option="{ columns: columns1, data: data1 }"
            @signal="tableSignal"
        >
        </ro-table>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        var self = this;
        return {
            columns1: [
                {
                    title: "Name",
                    key: "name"
                },
                {
                    title: "Age",
                    key: "age"
                },
                {
                    title: "Address",
                    key: "address"
                },
                {
                    title: "Operate",
                    type: "operate",
                    action: ["view", "delete"],
                    tools: [
                        {
                            text: "view",
                            type: "text",
                            size: "small",
                            operate() {
                                self.$Message.info("text");
                            }
                        },
                        {
                            type: "text",
                            size: "small",
                            text: "delete",
                            confirm: "确定要删除这条记录吗?",
                            operate({ column, index, row }) {
                                return self.$http
                                    .delete(
                                        `http://localhost:8888/user/${row.id}`
                                    )
                                    .then(res => {
                                        if (res.status === 200) {
                                            self.$Message.success("删除成功");
                                            self.$refs.table.refresh();
                                        } else {
                                            self.$Message.error("删除失败");
                                        }
                                    });
                            }
                        }
                    ]
                }
            ],
            data1(opt) {
                return self.$http
                    .get("http://localhost:8888/user", {
                        params: {
                            _page: opt.page.current,
                            _limit: opt.page.size
                        }
                    })
                    .then(res => {
                        const total = res.headers["x-total-count"];
                        const data = res.data;
                        return { total, data };
                    });
            }
        };
    },
    methods: {
        tableSignal() {}
    },
    mounted() {}
};
</script>
