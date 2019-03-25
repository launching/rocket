import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "user",
            component: () => import("./views/User.vue")
        },
        {
            path: "/addUser",
            name: "addUser",
            component: () => import("./views/AddUser.vue")
        },
        {
            path: "/rocket/table",
            name: "roTable",
            component: () => import("./views/rocket/Table.vue")
        },
        {
            path: "/rocket/toolbar",
            name: "roToolbar",
            component: () => import("./views/rocket/Toolbar.vue")
        },
        {
            path: "/rocket/curd",
            name: "roCurd",
            component: () => import("./views/rocket/Curd.vue")
        },
        {
            path: "/rocket/form",
            name: "roForm",
            component: () => import("./views/rocket/Form.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});
