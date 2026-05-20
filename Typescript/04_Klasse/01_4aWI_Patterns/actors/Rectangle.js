"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Actor_js_1 = require("./Actor.js");
class Rectangle {
    x;
    y;
    width;
    height;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move(delta) {
        this.x += delta * 100; // Move 100 pixels per second
        this.y += delta * 100; // Move 100 pixels per second
    }
    sayHello() {
        console.log("Hello from Rectangle!");
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map