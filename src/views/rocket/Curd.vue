<style lang="scss">
.rov-table {
    margin-top: 10px;
}
</style>
<template>
    <div class="rov-table">
        <h1>CURD</h1>
        <ro-curd ref="table" v-bind="curd" @signal="tableSignal"> </ro-curd>
    </div>
</template>
<script>
import curd from "./curd";
export default {
    components: {},
    data() {
        return {
            curd
        };
    },
    methods: {
        tableSignal() {}
    },
    mounted() {}
};
</script>
