"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Engine {
    manufacturer;
    horsepower;
    fuel;
    owner;
    constructor(manufacturer, horsepower, fuel) {
        this.manufacturer = manufacturer;
        this.horsepower = horsepower;
        this.fuel = fuel;
        if (horsepower < 0)
            throw new Error("Horsepower must be >= 0");
    }
    setOwner(owner) {
        this.owner = owner;
    }
    removeOwner() {
        this.owner = undefined;
    }
    getOwner() {
        return this.owner;
    }
    info() {
        const ownerInfo = this.owner
            ? `Owner: ${this.owner.fullName} (Alter: ${this.owner.age})`
            : "Owner: none";
        return `Engine - Hersteller: ${this.manufacturer}, Horsepower: ${this.horsepower}, Fuel: ${this.fuel}. ${ownerInfo}`;
    }
}
const myEngine = new Engine("BMW", 451, "benzin");
console.log(myEngine.info());
//# sourceMappingURL=Engine.js.map