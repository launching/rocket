import UserList from "./UserList";
import UserCreate from "./UserCreate";
import ViewPage from "@/components/viewPage";

export default {
    path: "/user",
    component: ViewPage,
    children: [
        {
            path: "/",
            name: "userList",
            component: UserList
        },
        {
            path: "/create",
            name: "userCreate",
            component: UserCreate
        }
    ]
};
