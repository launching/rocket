<template>
    <div class="v-majer">
        <Breadcrumb class="breadcrumb">
            <BreadcrumbItem>User</BreadcrumbItem>
        </Breadcrumb>
        <Content class="content">
            <div style="text-align:right;padding-bottom:20px;">
                <Button to="/addUser" type="primary">添加用户</Button>
            </div>
            <Table
                :loading="loading"
                :data="currentPageUser"
                :columns="tableColumns1"
                :stripe="true"
            ></Table>
            <Modal draggable v-model="modal" width="360">
                <p slot="header" style="color:#f60;text-align:center">
                    <Icon type="ios-information-circle"></Icon>
                    <span>Delete confirmation</span>
                </p>
                <div style="text-align:center">
                    <p>Will you delete it?</p>
                </div>
                <div slot="footer">
                    <Button
                        type="error"
                        size="large"
                        long
                        :loading="modal_loading"
                        @click="del"
                        >Delete</Button
                    >
                </div>
            </Modal>
            <div v-if="!loading" style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page
                        :total="totalNums"
                        :current="currentPage"
                        @on-change="changePage"
                        show-total
                    ></Page>
                </div>
            </div>
        </Content>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "user",
    data() {
        let nums = [];
        let i = 100;
        do {
            nums.push(i);
            i--;
        } while (i >= 0);
        return {
            modal: false,
            loading: true,
            modal_loading: false,
            userSelectedId: "",
            currentPage: 1,
            nums,
            tableData1: [],
            currentPageUser: [],
            tableColumns1: [
                {
                    title: "Name",
                    key: "name"
                },
                {
                    title: "Status",
                    key: "status",
                    render: (h, params) => {
                        const row = params.row;
                        const color =
                            row.status === 1
                                ? "primary"
                                : row.status === 2
                                ? "success"
                                : "error";
                        const text =
                            row.status === 1
                                ? "Working"
                                : row.status === 2
                                ? "Success"
                                : "Fail";

                        return h(
                            "Tag",
                            {
                                props: {
                                    type: "dot",
                                    color: color
                                }
                            },
                            text
                        );
                    }
                },
                {
                    title: "Portrayal",
                    key: "portrayal",
                    render: (h, params) => {
                        return h(
                            "Poptip",
                            {
                                props: {
                                    trigger: "hover",
                                    title:
                                        params.row.portrayal.length +
                                        "portrayals",
                                    placement: "bottom"
                                }
                            },
                            [
                                h("Tag", params.row.portrayal.length),
                                h(
                                    "div",
                                    {
                                        slot: "content"
                                    },
                                    [
                                        h(
                                            "ul",
                                            this.currentPageUser[
                                                params.index
                                            ].portrayal.map(item => {
                                                return h(
                                                    "li",
                                                    {
                                                        style: {
                                                            textAlign: "center",
                                                            padding: "4px"
                                                        }
                                                    },
                                                    item
                                                );
                                            })
                                        )
                                    ]
                                )
                            ]
                        );
                    }
                },
                {
                    title: "People",
                    key: "people",
                    render: (h, params) => {
                        return h(
                            "Poptip",
                            {
                                props: {
                                    trigger: "hover",
                                    title:
                                        params.row.people.length + "customers",
                                    placement: "bottom"
                                }
                            },
                            [
                                h("Tag", params.row.people.length),
                                h(
                                    "div",
                                    {
                                        slot: "content"
                                    },
                                    [
                                        h(
                                            "ul",
                                            this.currentPageUser[
                                                params.index
                                            ].people.map(item => {
                                                return h(
                                                    "li",
                                                    {
                                                        style: {
                                                            textAlign: "center",
                                                            padding: "4px"
                                                        }
                                                    },
                                                    item.n +
                                                        "：" +
                                                        item.c +
                                                        "People"
                                                );
                                            })
                                        )
                                    ]
                                )
                            ]
                        );
                    }
                },
                {
                    title: "Sampling Time",
                    key: "time",
                    render: (h, params) => {
                        return h("div", "Almost" + params.row.time + "days");
                    }
                },
                {
                    title: "Updated Time",
                    key: "update",
                    render: (h, params) => {
                        return h(
                            "div",
                            this.formatDate(
                                this.currentPageUser[params.index].update
                            )
                        );
                    }
                },
                {
                    title: "Action",
                    key: "action",
                    width: 150,
                    align: "center",
                    render: (h, params) => {
                        return h("div", [
                            h(
                                "Button",
                                {
                                    props: {
                                        type: "error",
                                        size: "small"
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index);
                                        }
                                    }
                                },
                                "Delete"
                            )
                        ]);
                    }
                }
            ]
        };
    },
    methods: {
        mockTableData1() {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    name: "Business" + Math.floor(Math.random() * 100 + 1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: [
                        "City",
                        "People",
                        "Cost",
                        "Life",
                        "Entertainment"
                    ],
                    people: [
                        {
                            n: "People" + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: "People" + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: "People" + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        }
                    ],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                });
            }
            return data;
        },
        formatDate(date) {
            date = new Date(date);
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? "0" + m : m;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            return y + "-" + m + "-" + d;
        },
        changePage(e) {
            this.currentPage = e;
            this.handlePageData();
        },
        remove(index) {
            this.modal = true;
            this.userSelectedId = this.currentPageUser[index].id;
        },
        getUsers() {
            this.$http
                .get("/users.json")
                .then(data => {
                    console.dir(data);
                    this.loading = false;
                    return data.data;
                })
                .then(data => {
                    this.loading = false;
                    var dataArray = [];
                    for (var key in data) {
                        data[key].id = key;
                        dataArray.push(data[key]);
                    }
                    this.tableData1 = dataArray;
                    this.handlePageData();
                });
        },
        del() {
            this.modal_loading = true;
            return this.$http
                .delete(`/users/${this.userSelectedId}.json`)
                .then(() => {
                    this.modal_loading = false;
                    this.modal = false;
                    this.$Message.success("Successfully delete");
                    this.getUsers();
                });
        },
        handlePageData() {
            // 处理分页数据
            if ((this.currentPage - 1) * 10 >= this.tableData1.length) {
                this.currentPage = this.currentPage - 1;
            }
            this.currentPageUser = [];
            let start = (this.currentPage - 1) * 10;
            let end =
                this.tableData1.length > this.currentPage * 10
                    ? start + 10
                    : this.tableData1.length;
            for (var i = start; i < end; i++) {
                this.currentPageUser.push(this.tableData1[i]);
            }
        }
    },
    mounted() {
        this.getUsers();
    },
    computed: {
        totalNums: function() {
            return this.tableData1.length;
        }
    }
};
</script>
