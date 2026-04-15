var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(salary, name) {
        var _this = _super.call(this, name) || this;
        _this.salary = salary;
        return _this;
    }
    Employe.prototype.getDetails = function () {
        console.log("the employee name is ", this.name);
        console.log("salary is ", this.salary);
    };
    return Employe;
}(Person));
var emp = new Employe(100000, "dhivya");
emp.getDetails();
