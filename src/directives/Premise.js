export default {
    update: function(newValue, oldValue) {
        debugger;
    },
    bind: function(el, binding, vnode) {
        let ctx = {};
        if (binding.value === undefined) {
            binding.value = true;
        }
        window.Rocket.generateFunction(binding.value, ctx).then(res => {
            if (!res) {
                el.remove();
            }
        });
    },
    inserted: function() {},
    componentUpdated: function() {},
    unbind: function() {}
};
