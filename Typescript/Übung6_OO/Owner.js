"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Owner {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (age < 0)
            throw new Error("Age must be >= 0");
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const andrej = new Owner("Andrej", "Barosevcic", 18);
myEngine.setOwner(andrej);
//# sourceMappingURL=Owner.js.map