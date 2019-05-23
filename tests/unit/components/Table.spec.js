import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Table from "@/components/Table.vue";
import flushPromises from "flush-promises";

describe("Table.vue", () => {
    const data = [
        {
            name: "张三",
            age: 19
        },
        {
            name: "李四",
            age: 68
        },
        {
            name: "王老五",
            age: 23
        }
    ];
    const tableData = {
        columns: ["name", "age"],
        data: null
    };

    it("测试data为数组", async () => {
        tableData.data = data;
        const wrapper = mount(Table, {
            propsData: tableData
        });
        await flushPromises();
        expect(wrapper.vm.list.length).to.equal(data.length);
        expect(wrapper.vm.total).to.equal(data.length);
    });

    it("测试data为函数", async () => {
        tableData.data = () => data;
        const wrapper = mount(Table, {
            propsData: tableData
        });
        await flushPromises();
        expect(wrapper.vm.list.length).to.equal(data.length);
        expect(wrapper.vm.total).to.equal(data.length);
    });

    it("测试data为异步请求", async () => {
        tableData.data = () => Promise.resolve(data);
        const wrapper = mount(Table, {
            propsData: tableData
        });
        await flushPromises();
        expect(wrapper.vm.list.length).to.equal(data.length);
        expect(wrapper.vm.total).to.equal(data.length);
    });
});
