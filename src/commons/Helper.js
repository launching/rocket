const _ = window._;
export default {
    /**
     *
     * @param {*} data //数据源
     * @param {*} ctx //当数据源的配置项，当数据源为函数时为函数的参数
     */
    generateFunction(data, ctx) {
        return Promise.resolve().then(res => {
            if (_.isFunction(data)) {
                return data(ctx);
            }
            return data;
        });
    }
};
