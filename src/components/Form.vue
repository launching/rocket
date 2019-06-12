<template>
    <Form class="ro-form" ref="form" :model="model" :rules="rules">
        <FormItem
            v-for="(field, index) in fields"
            :key="index"
            :label="field.label"
            :prop="field.name"
            :required="field.required"
        >
            <ro-field
                :option="field"
                :value="model[field.name]"
                :model="model"
                @ready="ready"
                @change="value => change(value, field)"
            ></ro-field>
        </FormItem>

        <FormItem>
            <ro-toolbar :tools="tools"></ro-toolbar>
        </FormItem>
    </Form>
</template>
<script>
import _ from "lodash";
export default {
    props: {
        option: [Object]
    },
    components: {},
    data() {
        return {
            fields: [],
            tools: [],
            model: {},
            rules: {}
        };
    },
    computed: {},
    methods: {
        init() {
            this.fields = this.option.fields;

            this.fields.forEach(item => {
                this.$set(this.model, item.name, "");
                item.rule && this.$set(this.rules, item.name, item.rule);
            });
            const tools = [
                { text: "submit", operate: () => this.submit() },
                {
                    text: "cancel",
                    operate: () => this.reset()
                }
            ];
            this.tools = this.option.tools || tools;
        },
        async reset() {
            this.$refs.form.resetFields();
            if (this.option.cancel) {
                return await this.option.cancel();
            } else {
                this.$emit("cancel", this.model);
            }
        },
        async submit() {
            const valid = await this.valid();
            if (!valid) return;
            if (this.option.submit) {
                return await this.option.submit(this.model);
            } else {
                this.$emit("submit", this.model);
            }
        },
        async valid() {
            const valid = await this.$refs.form.validate();
            if (!valid) this.$Message.error("提交信息不合法");
            return valid;
        },
        refresh() {},
        change(value, field) {
            this.model[field.name] = value;
        },
        ready() {}
    },
    mounted() {
        this.init();
    }
};
</script>
