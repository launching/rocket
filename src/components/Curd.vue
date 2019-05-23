<template>
    <div class="ro-curd">
        <div class="ro-table-header">
            <Input
                class="search-filter-input"
                search
                enter-button
                @on-search="filterSearch"
            />
        </div>
        <ro-table v-bind="table" ref="table"></ro-table>
    </div>
</template>
<script>
import _ from "lodash";
export default {
    props: {
        table: [Object],
        filter: [String]
    },
    components: {},
    data() {
        const search = {};
        if (_.isString(this.filter)) {
            search[this.filter] = "";
        }
        return {
            search
        };
    },
    methods: {
        filterSearch(value) {
            if (_.isString(this.filter)) {
                this.search[this.filter] = value;
            }
            this.$refs.table.refresh(this.search);
        }
    },
    mounted() {}
};
</script>
