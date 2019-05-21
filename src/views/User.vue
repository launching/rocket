<style lang="scss">
.rov-table {
    margin-top: 10px;
}
</style>
<template>
    <div class="rov-table">
        <h1>USER</h1>
        <ro-curd
            ref="table"
            v-bind="{
                table,
                filter
            }"
        >
        </ro-curd>
    </div>
</template>
<script>
import Store from "../commons/Store";

export default {
    components: {},
    data() {
        return {
            table: {
                showIndex: true,
                localPage: true,
                columns: ["name", "age", "address", ["view", "delete"]],
                store: new Store("http://localhost:8888/user")
            },
            filter: "name"
        };
    },
    methods: {}
};
</script>
