<template>
    <div class="ro-curd">
        <div class="ro-curd-list" v-if="status === 'LIST'">
            <div class="ro-table-header">
                <ro-toolbar class="pull-right" :tools="rightTools" :ctx="{}">
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
            ro-form
        </div>
    </div>
</template>
<script>
import _ from "lodash";
export default {
    props: {
        table: [Object],
        filter: [String],
        control: [Array],
        store: [Object]
    },
    components: {},
    computed: {
        rightTools() {
            let control = this.control;
            return control.map(it => {
                return {
                    text: it,
                    type: "primary",
                    operate: (...args) => this.create(...args)
                };
            });
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
        create() {
            this.status = "CREATE";
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
        }
    },
    mounted() {}
};
</script>
