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
var vehicles = /** @class */ (function () {
    function vehicles(brand) {
        this.brand = brand;
    }
    vehicles.prototype.start = function () {
        console.log("The brand name is ", this.brand);
    };
    return vehicles;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(fuelType, brand) {
        var _this = _super.call(this, brand) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    car.prototype.start = function () {
        console.log("The fuel type is ", this.fuelType);
    };
    return car;
}(vehicles));
var bike = /** @class */ (function (_super) {
    __extends(bike, _super);
    function bike(fuelType, brand) {
        return _super.call(this, fuelType, brand) || this;
    }
    bike.prototype.start = function () {
        console.log("The fuel type is ", this.fuelType);
        console.log("The brand is ", this.brand);
    };
    return bike;
}(car));
var object = new bike("Petrol", "KTM");
object.start();
