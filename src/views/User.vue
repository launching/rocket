<style lang="scss">
.rov-table {
    margin-top: 10px;
}
</style>
<template>
    <div class="rov-table">
        <h1>USER</h1>
        <ro-table ref="table" v-bind="table"></ro-table>
    </div>
</template>
<script>
import Store from "../commons/Store";

export default {
    components: {},
    data() {
        const store = new Store("http://localhost:8888/user");
        return {
            table: {
                showIndex: true,
                columns: ["name", "age", "address", ["view", "delete"]],
                data() {
                    return store.get();
                }
            },
            filter: "name"
        };
    },
    methods: {}
};
</script>
