<style lang="scss"></style>
<template>
    <div class="rov-form">
        <h1>TABLE</h1>
        <ro-form :option="option" class="form"></ro-form>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            option: {
                labelWidth: 150,
                fields: [
                    {
                        label: "Input",
                        name: "name",
                        widget: "Input",
                        required: true
                    },
                    {
                        label: "Input",
                        name: "name1",
                        widget: "Input",
                        rule: [
                            {
                                type: "string",
                                required: true,
                                message: "小丑鱼"
                            }
                        ]
                    },
                    {
                        label: "Input",
                        name: "name2",
                        widget: "Input"
                    }
                ]
            }
        };
    },
    methods: {},
    mounted() {}
};
</script>
