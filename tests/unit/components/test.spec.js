import { expect } from "chai";
import test from "@/components/test";
describe("test.js", () => {
    it("当index为1, 输出为1", () => {
        let index = 1;
        let result = test.cal(index);
        expect(result).to.equal(1);
    });

    it("当index为2, 输出为2", () => {
        let index = 2;
        let result = test.cal(index);
        expect(result).to.equal(2);
    });

    it("当index为9, 输出为'Fizz'", () => {
        let index = 9;
        let result = test.cal(index);
        expect(result).to.equal("Fizz");
    });

    it("当index为20, 输出为'Buzz'", () => {
        let index = 20;
        let result = test.cal(index);
        expect(result).to.equal("Buzz");
    });

    it("当index为90, 输出为'FizzBuzz'", () => {
        let index = 90;
        let result = test.cal(index);
        expect(result).to.equal("FizzBuzz");
    });
    it("当index为100, 输出为'Buzz'", () => {
        let index = 100;
        let result = test.cal(index);
        expect(result).to.equal("Buzz");
    });

    it("当index为19, 输出为19", () => {
        let index = 19;
        let result = test.cal(index);
        expect(result).to.equal(19);
    });

    it("当index<1, 输出为throw", () => {
        let index = -1;
        expect(() => {
            test.cal(index);
        }).to.throw();
    });
    it("当index>100, 输出为throw", () => {
        let index = 120;
        expect(() => {
            test.cal(index);
        }).to.throw();
    });
});
