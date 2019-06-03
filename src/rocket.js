import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import iView from "iview";
import "iview/dist/styles/iview.css";
import _ from "lodash";
import Rocket from "./commons/Helper";

window._ = _;
window.Rocket = Rocket;

const rocket = {
    /**
     *
     * @param {*} Vue
     * @param {} options
     */
    install(Vue) {
        Vue.use(iView);

        const requireComponent = require.context(
            // 其组件目录的相对路径
            "./components",
            // 是否查询其子目录
            true,
            // 匹配基础组件文件名的正则表达式
            /[A-Z]\w+\.(vue|js)$/
        );

        const requireDirective = require.context(
            // 其组件目录的相对路径
            "./directives",
            // 是否查询其子目录
            false,
            // 匹配基础组件文件名的正则表达式
            /[A-Z]\w+\.(vue|js)$/
        );
        requireComponent.keys().forEach(fileName => {
            // 获取组件配置
            const componentConfig = requireComponent(fileName);

            // 获取组件的 PascalCase 命名
            const componentName = upperFirst(
                camelCase(
                    // 剥去文件名开头的 `./` 和结尾的扩展名
                    fileName.replace(/^\.\/(.*)\.\w+$/, "$1")
                )
            );
            console.dir(componentName);

            // 全局注册组件
            Vue.component(
                `Ro${componentName}`,
                // 如果这个组件选项是通过 `export default` 导出的，
                // 那么就会优先使用 `.default`，
                // 否则回退到使用模块的根。
                componentConfig.default || componentConfig
            );
        });

        requireDirective.keys().forEach(fileName => {
            const directiveConfig = requireDirective(fileName);
            const directiveName = upperFirst(
                camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
            );
            Vue.directive(
                `Ro${directiveName}`,

                directiveConfig.default || directiveConfig
            );
        });
    }
};
export default rocket;
