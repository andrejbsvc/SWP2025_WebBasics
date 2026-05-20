"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MyGame - Example implementation of Game interface
const GameFramework_js_1 = require("./GameFramework.js");
const Rectangle_js_1 = require("./actors/Rectangle.js");
const Circle_js_1 = require("./actors/Circle.js");
const Actor_js_1 = require("./actors/Actor.js");
const SuperCircle_js_1 = require("./actors/SuperCircle.js");
class MyGame extends GameFramework_js_1.Game {
    x = 50;
    y = 100;
    x1 = 200;
    y1 = 200;
    isGoingRight = true;
    init() {
        console.log("Game initialized");
    }
    update(deltaTime) {
        console.log(`Game updated with deltaTime: ${deltaTime}`);
        this.y1 += 100 * deltaTime;
        if (this.isGoingRight) {
            this.x += 400 * deltaTime;
        }
        else {
            this.x -= 400 * deltaTime;
        }
        if (this.x > 300 && this.isGoingRight) {
            this.isGoingRight = false;
        }
        if (this.x < 100 && !this.isGoingRight) {
            this.isGoingRight = true;
        }
    }
    render(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 60, 40);
        ctx.fillRect(this.x1, this.y1, 60, 40);
    }
}
const game = new MyGame();
const framework = new GameFramework_js_1.GameFramework(game, 800, 600);
framework.start();
console.log("test");
//# sourceMappingURL=MyGame.js.map