import RoStore from "@/commons/Store";

const table = {
    showIndex: true,
    columns: [{ title: "Name", key: "name" }, { title: "Age", key: "age" }],
    store: new RoStore("http://localhost:8888/user")
};
const form = {};
export default {
    table,
    form
};
