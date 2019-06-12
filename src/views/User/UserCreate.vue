<template>
    <div>
        <ro-form :option="form"></ro-form>
    </div>
</template>
<script>
import Store from "../../commons/Store";
export default {
    data() {
        const store = new Store("http://localhost:8888/user");
        return {
            form: {
                fields: [
                    {
                        label: "名字",
                        widget: "Input",
                        name: "name",
                        required: true
                    },
                    {
                        label: "年龄",
                        widget: "InputNumber",
                        name: "age",
                        required: true
                    }
                ],
                submit: async model => {
                    const res = await store.post(model);
                    if (res) {
                        this.$router.push({ name: "userList" });
                    }
                }
            }
        };
    }
};
</script>
