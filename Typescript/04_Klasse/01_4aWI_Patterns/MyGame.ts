// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";

class MyGame extends Game {
  private x: number = 50;
  private y: number = 100;
  private x1: number = 200;
  private y1: number = 200;
  private isGoingRight: boolean = true;

  init(): void {
    console.log("Game initialized");
  }

  update(deltaTime: number): void {
    console.log(`Game updated with deltaTime: ${deltaTime}`);
    this.y1 += 100 * deltaTime;
    if (this.isGoingRight) {
      this.x += 400 * deltaTime;
    } else {
      this.x -= 400 * deltaTime;
    }

    if (this.x > 300 && this.isGoingRight) {
      this.isGoingRight = false;
    }

    if (this.x < 100 && !this.isGoingRight) {
      this.isGoingRight = true;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 60, 40);
    ctx.fillRect(this.x1, this.y1, 60, 40);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
