<style lang="scss">
.rov-form {
    margin-top: 10px;
    background: white;
}
</style>
<template>
    <div class="rov-form">
        <h1>TABLE</h1>
        <ro-form v-bind="form"></ro-form>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            form: {
                labelWidth: 100,
                fields: [
                    {
                        label: "Input",
                        placeholder: "Enter something...",
                        widget: "Input"
                    },
                    {
                        label: "Input",
                        placeholder: "Enter something...",
                        widget: "Input"
                    },
                    {
                        label: "Input",
                        placeholder: "Enter something...",
                        widget: "Input"
                    }
                ],
                submit(model) {
                    console.dir(model);
                },
                reset(model) {
                    console.dir(model);
                }
            }
        };
    },
    methods: {},
    mounted() {}
};
</script>
