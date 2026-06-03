// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";
import { Tree } from "./actors/Tree.js";

class MyGame extends Game {
  private actors: Actor[] = [];

  private isGoingRight: boolean = true;

  init(): void {
    console.log("Game initialized");
   const r1: Rectangle = new Rectangle(50, 50, 70, 100);
   const r2: Rectangle = new Rectangle(20, 200, 40, 30);
   const r3: Rectangle = new Rectangle(400, 300, 50, 50);
   this.actors.push(r1, r2, r3);
   this.actors.push(new Tree(200, 100, 120));
   this.actors.push(new Tree(500, 200, 80));
   this.actors.push(new Tree(300, 300, 100));

   const c1: Circle = new Circle(100, 100, 50);
   const c2: Circle = new Circle(300, 200, 30);
   this.actors.push(c1, c2);

  }

  update(deltaTime: number): void {
   
   this.actors.forEach((actor: Actor) => {
     actor.update?.(deltaTime);
   });

  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach(actor => actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
