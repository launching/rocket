<style lang="scss">
.rov-toolbar {
    margin-top: 10px;
}
</style>
<template>
    <div class="rov-toolbar">
        <h1>TOOLBAR</h1>
        <div>
            <ro-toolbar :option="toolbar"></ro-toolbar>
        </div>
        <div>
            <ro-toolbar :option="toolbar1"></ro-toolbar>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        let self = this;
        let operate = function() {
            self.$Message.info("点击成功");
        };
        return {
            toolbar: {
                tools: [
                    { text: "view", operate },
                    {
                        text: "delete",
                        operate
                    },
                    {
                        text: "delete",
                        operate
                    },
                    {
                        text: "delete",
                        operate
                    },
                    {
                        text: "delete",
                        operate
                    }
                ]
            },
            toolbar1: [
                { text: "view", operate },
                {
                    text: "delete",
                    confirm: true,
                    operate
                }
            ]
        };
    },
    methods: {},
    mounted() {}
};
</script>
