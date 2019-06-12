import Vue from "vue";
import Router from "vue-router";
import User from "@/views/User";
import Role from "@/views/Role";
import Auth from "@/views/Auth";
import Rocket from "@/views/rocket";
Vue.use(Router);

const routes = [];
routes.push(User);
routes.push(Role);
routes.push(Auth);
routes.push(Rocket);
export default new Router({
    mode: "history",
    routes
});
