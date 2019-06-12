<template>
    <div>
        {{ a }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            a: 1
        };
    },
    watchs: {
        a(v) {
            console.dir(v);
        }
    },
    mounted() {
        this.a = 2;
        this.a = 3;
        this.a = 4;
    }
};
</script>
