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
        <ro-curd :table="table" v-bind="{ filter, control, store }"></ro-curd>
    </div>
</template>
<script>
import Store from "../commons/Store";

export default {
    components: {},
    data() {
        const store = new Store("http://localhost:8888/user");
        return {
            filter: "name",
            control: ["create"],
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
                        widget: "Input"
                    },
                    {
                        label: "年龄",
                        widget: "Number"
                    }
                ],
                submit: res => store.put(res)
            }
        };
    },
    methods: {}
};
</script>
