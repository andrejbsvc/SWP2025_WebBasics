// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
    }
    init() {
        console.log("Game initialized");
    }
    update(deltaTime) {
        console.log(`Game updated with deltaTime: ${deltaTime}`);
        this.x += 100 * deltaTime;
    }
    render(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 50, 50);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
