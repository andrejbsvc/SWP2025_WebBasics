// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.rect1 = null;
        this.rect2 = null;
        this.isGoingRight = true;
    }
    init() {
        console.log("Game initialized");
        this.rect1 = new Rectangle(100, 100, 60, 40);
        this.rect2 = new Rectangle(200, 200, 60, 40);
    }
    update(deltaTime) {
        console.log(`Game updated with deltaTime: ${deltaTime}`);
        this.rect1?.move(deltaTime);
        this.rect2?.move(deltaTime);
    }
    render(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "red";
        this.rect1?.render(ctx);
        this.rect2?.render(ctx);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
