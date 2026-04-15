var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.multiply = function (num, num2) {
        if (typeof num === "number" && typeof num2 === "number") {
            var c = num * num2;
            console.log(c);
        }
        else if (typeof num == "string" && typeof num2 == "number") {
            var b = num.repeat(num2);
            console.log(b);
        }
    };
    return Calculator;
}());
var obj = new Calculator();
obj.multiply(2, 3);
obj.multiply("Hi", 3);
