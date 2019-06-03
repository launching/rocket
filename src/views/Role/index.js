import RoleList from "./RoleList";
import ViewPage from "@/components/viewPage";
export default {
    path: "/role",
    component: ViewPage,
    children: [
        {
            path: "/",
            name: "roleList",
            component: RoleList
        }
        // {
        //     path: "/create",
        //     name: 'roleCreate',
        //     component: RoleCreate
        // }
    ]
};
