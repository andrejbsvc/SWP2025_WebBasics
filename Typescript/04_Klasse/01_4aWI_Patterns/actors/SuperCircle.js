import { Circle } from "./Circle.js";
export class SuperCircle extends Circle {
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
