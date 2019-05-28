import _ from "lodash";
export default {
    /**
     *
     * @param {*} data //数据源
     * @param {*} ctx //当数据源的配置项，当数据源为函数时为函数的参数
     */
    generateFunction(data, ctx) {
        return Promise.resolve(true).then(() => {
            if (_.isFunction(data)) {
                return data(ctx);
            }
            return data;
        });
    },

    initColumns(origin) {
        const target = _.cloneDeep(origin);
        for (let i = 0; i < target.length; i++) {
            let item = target[i];
            if (_.isString(item)) {
                item = {
                    key: item
                };
            }

            if (_.isArray(item)) {
                item = {
                    type: "operate",
                    action: item
                };
            }

            if (_.isPlainObject(item)) {
                if (item.key) {
                    item.title = item.title || _.capitalize(item.key);
                } else {
                    item.title = item.title || _.capitalize(item.type);
                }
            }
            target[i] = item;
        }
        return target;
    },

    initTableOperate(operate) {
        const tools = {
            view: {
                text: "view",
                type: "text",
                size: "small",
                operate: () => this.$Message.info("text")
            },
            delete: {
                type: "text",
                size: "small",
                text: "delete",
                style: "{ color: white}",
                confirm: "确定要删除这条记录吗?",
                operate: opt => {
                    if (opt.on === "cancel") return;
                    return this.$emit("signal", "delete", opt.row);
                }
            }
        };
        operate.tools = operate.tools || [];
        operate.action.forEach(opt => {
            tools[opt] && operate.tools.push(tools[opt]);
        });

        operate.render = (h, params) => {
            return h("ro-toolbar", {
                props: { tools: operate.tools, ctx: params }
            });
        };

        return operate;
    },

    filterList(list, filter, current, size) {
        let target = _.cloneDeep(list);
        for (let key in filter) {
            target = target.filter(item => {
                return item[key] && item[key].indexOf(filter[key]) > -1;
            });
        }
        return target.splice((current - 1) * size, current * size);
    }
};
