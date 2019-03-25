<script>
const _ = window._;
export default {
    props: {
        labelWidth: Number,
        label: String,
        widget: String
    },
    components: {},
    computed: {
        itemProps() {
            const props = {};
            ["label", "labelWidth"].forEach(item => {
                this[item] && (props[item] = this[item]);
            });
            return props;
        }
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {},
    render(h, props) {
        console.dir(this.props);
        console.dir(this.$attrs);
        return h("FormItem", { props: this.itemProps }, [
            h(this.widget, { props: this.$attrs })
        ]);
    }
};
</script>
