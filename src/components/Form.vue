<template>
    <Form class="ro-form">
        <ro-field
            v-bind="field"
            v-for="(field, index) in _fields"
            :key="index"
        ></ro-field>
    </Form>
</template>
<script>
let _ = window._;
export default {
    props: {
        fields: {
            type: Array
        },
        submit: {
            type: Function
        },
        reset: {
            type: Function
        },
        labelWidth: Number
    },
    components: {},
    data() {
        return {
            itemPropName: "labelWidth".split(","),
            model: {}
        };
    },
    computed: {
        _fields() {
            const fields = _.cloneDeep(this.fields);
            fields.push({
                widget: "roToolbar",
                tools: [
                    {
                        text: "提交",
                        operate: () => this.operate("submit")
                    },
                    {
                        text: "取消",
                        operate: () => this.operate("reset")
                    }
                ]
            });

            for (let p of this.itemPropName) {
                fields.forEach(item => {
                    item[p] = item[p] || this[p];
                });
            }

            return fields || [];
        }
    },
    methods: {
        operate(type) {
            if (_.isFunction(this[type.toLowerCase()])) {
                Promise.resolve(this[type.toLowerCase()](this.model))
                    .then(res => {
                        this.$emit(
                            "signal",
                            type.toUpperCase(),
                            res,
                            this.model
                        );
                    })
                    .catch(res => {
                        this.$emit(
                            "signal",
                            type.toUpperCase() + "-ERROR",
                            res,
                            this.model
                        );
                    });
            }
        }
    },
    mounted() {}
};
</script>
