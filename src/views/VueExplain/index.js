import ViewPage from "@/components/viewPage";
import Observe from "./Observe";
import VirtualDom from "./VirtualDom";
export default {
    path: "/vue_explain",
    component: ViewPage,
    children: [
        {
            path: "/",
            name: "Observe",
            component: Observe
        },
        {
            path: "/virtual_dom",
            name: "VirtualDom",
            component: VirtualDom
        }
    ]
};
