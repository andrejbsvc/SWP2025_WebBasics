import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";

export class Homer extends AbstractActor {
    constructor(protected movement: MoveStrategy) {
        super(movement);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#ffcc00";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.movement.getX() - 7, this.movement.getY() - 5, 5, 0, Math.PI * 2);
        ctx.arc(this.movement.getX() + 7, this.movement.getY() - 5, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY() + 5, 10, 0, Math.PI);
        ctx.stroke();
    }
}   