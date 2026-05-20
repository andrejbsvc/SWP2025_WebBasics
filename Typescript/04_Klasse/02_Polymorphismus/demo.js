"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    sayHello() {
        console.log("Hello from A");
    }
}
class B extends A {
    sayHello() {
        console.log("Hello from B");
    }
    bark() {
        console.log("Woof!");
    }
}
class C extends B {
    sayHello() {
        console.log("Hello from C");
    }
    quack() {
        console.log("Quack!");
    }
}
const b = new C();
b.bark();
b.sayHello();
//# sourceMappingURL=demo.js.map