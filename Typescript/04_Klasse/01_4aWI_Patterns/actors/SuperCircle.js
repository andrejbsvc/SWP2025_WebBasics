"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperCircle = void 0;
const Circle_js_1 = require("./Circle.js");
class SuperCircle extends Circle_js_1.Circle {
    speed;
    constructor(x, y, radius, speed = 50) {
        super(x, y, radius);
        this.speed = speed;
    }
    sayHello() {
        console.log("Hello from SuperCircle!");
    }
    move(delta) {
        // Call the move method from Circle
        this.y += delta * 50; // Additional movement in the y direction
    }
}
exports.SuperCircle = SuperCircle;
//# sourceMappingURL=SuperCircle.js.map