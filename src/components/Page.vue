<!--
options : {
    current:1
    total: 20,
    pageSize:{
        size:10,
        option:[10,20,30]
    },
}
-->
<template>
    <Page
        :total="option.total"
        :current="option.current"
        size="small"
        :page-size="option.size"
        show-elevator
        show-sizer
        show-total
        @on-change="changeCurrent"
        @on-page-size-change="changePageSize"
    />
</template>
<script>
export default {
    props: {
        option: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        changeCurrent(num) {
            this.$emit("signal", "_page", num);
        },
        changePageSize(size) {
            this.$emit("signal", "_limit", size);
        }
    },
    mounted() {}
};
</script>
