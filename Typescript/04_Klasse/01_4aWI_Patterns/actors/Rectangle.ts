import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./Actor.js";
export class Rectangle implements Actor {
  constructor(
   private movement: MoveStrategy,
    private width: number,
    private height: number
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
  }

  update(delta: number): void {
    console.log("in update of rect");
    this.movement.update(delta, this.width);
  }

  sayHello(): void {
    console.log("Hello from Rectangle!");
  }
}
