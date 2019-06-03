import ViewPage from "@/components/viewPage";

import Form from "./Form";
import Toolbar from "./Toolbar";

export default {
    path: "/rocket",
    component: ViewPage,
    children: [
        {
            path: "/",
            name: "RocketForm",
            component: Form
        },
        {
            path: "/toolbar",
            name: "RocketToolbar",
            component: Toolbar
        }
    ]
};
