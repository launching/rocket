<template>
    <div>
        <ro-table v-bind="table"></ro-table>
    </div>
</template>
<script>
export default {
    props: ["table", "form"],
    components: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {
        console.dir(this.table);
    }
};
</script>
