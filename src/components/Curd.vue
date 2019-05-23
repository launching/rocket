<template>
    <div class="ro-curd">
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
        <ro-table :option="table" ref="table"></ro-table>
    </div>
</template>
<script>
import _ from "lodash";
export default {
    props: {
        table: [Object],
        filter: [String],
        control: [Array]
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
        return {};
    },
    methods: {
        search(value) {},
        create() {}
    },
    mounted() {}
};
</script>
