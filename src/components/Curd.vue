<template>
    <div class="ro-curd">
        <ro-table v-bind="table"></ro-table>
    </div>
</template>
<script>
export default {
    props: {
        table: [Object]
    },
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
