// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 0;
    }
    init() { }
    update(deltaTime) {
        // console.log("update:", deltaTime);
        this.x++;
    }
    render(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, 50, 50, 50);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
