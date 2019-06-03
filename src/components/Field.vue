<template>
    <div>
        <component
            :is="widget"
            :option="option"
            :value.sync="value"
            :model="model"
            @ready="widgetReady"
            @change="widgetChange"
        ></component>
    </div>
</template>
<script>
const _ = window._;
export default {
    props: {
        option: [Object],
        value: [String, Number, Object, Array],
        model: [Object]
    },
    components: {},
    computed: {
        widget() {
            return `ro-widget-${this.option.widget}`;
        }
    },
    data() {
        return {};
    },
    methods: {
        widgetReady() {},
        widgetChange(value) {
            this.$emit("change", value);
        }
    },
    mounted() {}
};
</script>
