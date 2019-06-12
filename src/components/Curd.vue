<template>
    <div class="ro-curd">
        <div class="ro-curd-list" v-if="status === 'LIST'">
            <div class="ro-table-header">
                <ro-toolbar
                    class="pull-right"
                    :tools="rightTools"
                    :ctx="{}"
                    @signal="rightToolsHandle"
                >
                </ro-toolbar>
                <Input
                    class="search-filter-input"
                    search
                    enter-button
                    @on-search="search"
                />
            </div>
            <ro-table
                :option="table"
                ref="table"
                @signal="tableSignal"
            ></ro-table>
        </div>
        <div class="ro-curd-create" v-if="status === 'CREATE'">
            <ro-form :option="form" @signal="formHandle"></ro-form>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        table: [Object],
        filter: [String],
        control: [Array],
        store: [Object],
        form: [Object]
    },
    components: {},
    computed: {
        rightTools() {
            let control = this.control;
            return control;
        }
    },
    data() {
        return {
            status: "LIST"
        };
    },
    methods: {
        search(value) {
            this.$refs.table.getList({ name_like: value });
        },
        tableSignal(type, data) {
            if (type === "delete") {
                this.delete(data.id);
            }
        },
        delete(id) {
            return this.store.delete(id).then(res => {
                if (res.status === 200) {
                    this.$Message.success("删除成功");
                    this.$refs.table.refresh();
                } else {
                    this.$Message.error("删除失败");
                }
            });
        },
        rightToolsHandle(type) {
            this.status = type;
        },
        async formSubmit(model) {
            const res = await this.store.post(model);
            if (res) {
                this.status = "LIST";
                this.$refs.table.refresh();
            }
        },
        formCancel() {
            this.status = "LIST";
            this.$refs.table.refresh();
        },
        formHandle(type, ...args) {
            if (type === "submit") {
                this.formSubmit(...args);
            } else if (type === "cancel") {
                this.formCancel(...args);
            }
        }
    },
    mounted() {}
};
</script>
