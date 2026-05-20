"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ElectricCar {
    brand;
    model;
    price;
    year;
    color;
    mileage;
    constructor(brand, model, price, year, color, mileage) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }
    getAge() {
        return new Date().getFullYear() - this.year;
    }
    toString() {
        return `${this.year} ${this.brand} ${this.model} - $${this.price.toLocaleString()}`;
    }
}
const car1 = new ElectricCar("Tesla", "Model 3", 45000, 2021, "red", 15000);
const car2 = new ElectricCar("Rimac Nevera", "Model 2", 2100000, 2024, "grey");
console.log(car2.toString());
console.log(`Car age: ${car2.getAge()} years`);
//# sourceMappingURL=ElectricCar.js.map