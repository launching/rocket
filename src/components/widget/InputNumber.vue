<template>
    <InputNumber
        v-bind="option"
        v-model="val"
        @on-change="change"
    ></InputNumber>
</template>
<script>
export default {
    props: ["value", "option", "model"],
    data() {
        return {
            val: this.value || 1
        };
    },
    methods: {
        change(event) {
            this.$emit("change", this.val);
        }
    },
    mounted() {
        this.change();
    }
};
</script>
