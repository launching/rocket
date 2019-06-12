<style lang="scss">
.rov-table {
    margin-top: 10px;
    h1 {
        -webkit-text-stroke: 1px white;
        color: transparent;
    }
}
</style>
<template>
    <div class="rov-table">
        <h1>USER</h1>
        <ro-curd
            :table="table"
            v-bind="{ filter, control, store, form }"
        ></ro-curd>
    </div>
</template>
<script>
import Store from "../../commons/Store";

export default {
    components: {},
    data() {
        const store = new Store("http://localhost:8888/user");
        return {
            filter: "name",
            control: [
                {
                    text: "create",
                    type: "primary",
                    signal: "CREATE"
                }
            ],
            store,
            table: {
                showIndex: true,
                columns: ["name", "age", ["view", "delete"]],
                data: res => store.get(res)
            },
            form: {
                fields: [
                    {
                        label: "名字",
                        widget: "Input",
                        name: "name",
                        required: true
                    },
                    {
                        label: "年龄",
                        widget: "InputNumber",
                        name: "age",
                        required: true
                    }
                ]
            }
        };
    },
    methods: {}
};
</script>
