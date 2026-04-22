// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";
class MyGame extends Game {
  private x: number = 0;

  init(): void {}

  update(deltaTime: number): void {
    // console.log("update:", deltaTime);
    this.x++;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, 50, 50, 50);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
