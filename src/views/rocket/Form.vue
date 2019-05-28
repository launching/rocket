<style lang="scss"></style>
<template>
    <div class="rov-form">
        <h1>TABLE</h1>
        <ro-form v-bind="form" class="form"></ro-form>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            form: {
                labelWidth: 150,
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
