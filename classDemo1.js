var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.showDetails = function () {
        console.log("".concat(this.make, " : ").concat(this.model, " : ").concat(this.year));
    };
    return Car;
}());
var car1 = new Car("Mercedes Benz", "E-Class", "2022");
car1.showDetails();
