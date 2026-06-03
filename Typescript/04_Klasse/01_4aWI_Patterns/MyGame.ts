// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";

class MyGame extends Game {
  private rectangles: Rectangle[] = [];
  private circles: Circle[] = [];
  
  private isGoingRight: boolean = true;

  init(): void {
    console.log("Game initialized");
   const r1: Rectangle = new Rectangle(50, 50, 70, 100);
   const r2: Rectangle = new Rectangle(20, 200, 40, 30);
   const r3: Rectangle = new Rectangle(400, 300, 50, 50);
   this.rectangles.push(r1, r2, r3);

   const c1: Circle = new Circle(100, 100, 50);
   const c2: Circle = new Circle(300, 200, 30);
   this.circles.push(c1, c2);

  }

  update(deltaTime: number): void {
    console.log(`Game updated with deltaTime: ${deltaTime}`);
   this.rectangles.forEach(rect => rect.move(deltaTime));
   this.circles.forEach(circle => circle.update(deltaTime));

  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "red";
    this.rectangles.forEach(rect => rect.render(ctx));
    this.circles.forEach(circle => circle.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
