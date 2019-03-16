<template>
    <div class="ro-toolbar">
        <Button
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
        option: {},
        ctx: {
            type: Object,
            default: function() {}
        }
    },
    computed: {
        tools() {
            var tmps;
            if (_.isArray(this.option)) {
                tmps = this.option;
            } else {
                tmps = this.option.tools;
            }
            return tmps;
        }
    },
    data() {
        return {};
    },
    methods: {
        operate(tool, index) {
            if (tool.signal) {
                return this.$emit("signal", tool.signal, this.ctx);
            }

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
                        opt.onOk = () => {
                            Promise.resolve()
                                .then(() => {
                                    return tool.operate(this.ctx);
                                })
                                .then(res => {
                                    this.$Modal.remove();
                                });
                        };
                        this.$Modal.confirm(opt);
                    });
            } else {
                return tool.operate(this.ctx);
            }
        }
    },
    mounted() {}
};
</script>
