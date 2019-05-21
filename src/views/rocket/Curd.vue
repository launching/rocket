<style lang="scss">
.rov-table {
    margin-top: 10px;
}
</style>
<template>
    <div class="rov-table">
        <ro-curd ref="table" v-bind="curd" @signal="tableSignal"> </ro-curd>
    </div>
</template>
<script>
import curd from "./curd";
export default {
    props: {
        option: [Object]
    },
    components: {},
    data() {
        return {
            curd
        };
    },
    computed: {},
    methods: {
        tableSignal() {}
    },
    mounted() {}
};
</script>
