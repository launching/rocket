import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
import "@/assets/css/commons.scss";
import axios from "axios";

//全局配置axios
axios.defaults.baseURL = "https://wd2077915826usmudk.wilddogio.com/";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
