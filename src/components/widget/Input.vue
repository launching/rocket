<template>
    <Input v-model="val" @on-change="change" />
</template>
<script>
export default {
    props: ["value", "option", "model"],
    data() {
        return {
            val: this.value || ""
        };
    },
    methods: {
        change(event) {
            this.$emit("change", this.val);
        }
    }
};
</script>
