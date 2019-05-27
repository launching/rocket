import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

//全局配置axios
axios.defaults.baseURL = "https://wd2077915826usmudk.wilddogio.com/";
Vue.prototype.$http = axios;
Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
