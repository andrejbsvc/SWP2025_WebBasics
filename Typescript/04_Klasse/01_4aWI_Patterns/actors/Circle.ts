import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export class Circle {

private radius: number = 10;

constructor(
  private movement: MoveStrategy,
  radius?: number,
) {
  if (radius !== undefined) {
    this.radius = radius;
  }
}


render(ctx: CanvasRenderingContext2D): void {
  ctx.fillStyle = "#da1616c9";
  ctx.beginPath();
  ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
  ctx.fill();
}

update(delta: number): void {
 this.movement.update(delta, 10);
}
}