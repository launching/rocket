<template>
    <div class="ro-toolbar">
        <Button
            v-ro-premise="tool.premise"
            v-for="(tool, $index) in tools"
            :key="$index"
            v-bind="tool"
            @click="operate(tool, $index)"
        >
            {{ tool.text }}
        </Button>
    </div>
</template>
<script>
const _ = window._;
export default {
    components: {},
    props: {
        tools: Array,
        ctx: {
            type: Object,
            default: function() {}
        }
    },
    computed: {},
    data() {
        return {};
    },
    methods: {
        operate(tool, index) {
            let confirm = tool.confirm;
            if (confirm) {
                let opt = {
                    loading: true,
                    title: _.capitalize(tool.text)
                };
                return Promise.resolve()
                    .then(() => {
                        let tmp = "再次确认";
                        if (_.isFunction(confirm)) {
                            tmp = confirm(this.ctx);
                        } else if (_.isString(confirm)) {
                            tmp = confirm;
                        }
                        return tmp;
                    })
                    .then(content => {
                        opt.content = content;
                        ["ok", "cancel"].forEach(item => {
                            opt[`on${_.capitalize(item)}`] = () => {
                                let ctx = {
                                    ...this.ctx,
                                    on: item
                                };
                                if (tool.signal) {
                                    this.ctx.on = item;
                                    return this.$emit(
                                        "signal",
                                        tool.signal,
                                        ctx
                                    );
                                }

                                Promise.resolve()
                                    .then(() => {
                                        return tool.operate.call(this, ctx);
                                    })
                                    .then(res => {
                                        item === "ok" && this.$Modal.remove();
                                    });
                            };
                        });

                        this.$Modal.confirm(opt);
                    });
            } else {
                if (tool.signal) {
                    return this.$emit("signal", tool.signal, this.ctx);
                }
                return tool.operate.call(this, this.ctx);
            }
        }
    },
    mounted() {}
};
</script>
