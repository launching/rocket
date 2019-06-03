import AuthList from "./AuthList";
import ViewPage from "@/components/viewPage";
export default {
    path: "/auth",
    component: ViewPage,
    children: [
        {
            path: "/",
            name: "authList",
            component: AuthList
        }
    ]
};
