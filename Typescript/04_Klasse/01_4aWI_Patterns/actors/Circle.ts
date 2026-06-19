import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";

export class Circle extends AbstractActor{

private radius: number = 10;

constructor(
  protected movement: MoveStrategy,
  radius?: number,
) {
  super(movement);
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


}