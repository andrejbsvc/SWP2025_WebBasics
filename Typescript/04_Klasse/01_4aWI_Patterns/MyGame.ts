// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";

class MyGame extends Game {
  private rect1: Rectangle | null = null;
  private rect2: Rectangle | null = null;
  private isGoingRight: boolean = true;

  init(): void {
    console.log("Game initialized");
    this.rect1 = new Rectangle(100, 100, 60, 40);
    this.rect2 = new Rectangle(200, 200, 60, 40);

  }

  update(deltaTime: number): void {
    console.log(`Game updated with deltaTime: ${deltaTime}`);
   this.rect1?.move(deltaTime);
   this.rect2?.move(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D): void {
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
