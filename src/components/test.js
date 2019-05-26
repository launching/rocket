export default {
    cal(i) {
        if (i > 100 || i < 1) {
            throw new Error("Igal");
        }

        if (i % 15 === 0) {
            return "FizzBuzz";
        }

        if (i % 5 === 0) {
            return "Buzz";
        }
        if (i % 3 === 0) {
            return "Fizz";
        }
        return i;
    }
};
