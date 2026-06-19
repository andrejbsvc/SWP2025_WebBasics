import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./Actor.js";
import { AbstractActor } from "./AbstractActor.js";

export class Rectangle extends AbstractActor  {
  constructor(
  protected movement: MoveStrategy,
    private width: number,
    private height: number
  ) {
      super(movement);
  }


  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
  }

 
}
