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
        :total="total"
        :current="current"
        size="small"
        :page-size="size"
        show-elevator
        show-sizer
        @on-change="changeCurrent"
        @on-page-size-change="changePageSize"
    />
</template>
<script>
export default {
    props: {
        option: {
            type: Object
        }
    },
    components: {},
    data() {
        return {};
    },
    computed: {
        total() {
            return this.option.total || 0;
        },
        current() {
            return this.option.current || 0;
        },
        size() {
            return this.option.size || 1;
        }
    },
    methods: {
        changeCurrent(num) {
            this.$emit("signal", "current", num);
        },
        changePageSize(size) {
            this.$emit("signal", "size", size);
        }
    },
    mounted() {}
};
</script>
