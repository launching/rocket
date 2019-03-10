<style>
html {
    position: relative;
    min-height: 100%;
    background: #ffffff;
}
</style>
<template>
    <ro-layout></ro-layout>
</template>
<script>
import RoLayout from "./views/Layout.vue";
export default {
    components: {
        RoLayout
    },
    data() {
        let nums = [];
        let i = 100;
        do {
            nums.push(i);
            i--;
        } while (i >= 0);
        return {
            nums
        };
    }
};
</script>
