import { Actor } from "./Actor.js";
export declare class Circle implements Actor {
    x: number;
    y: number;
    radius: number;
    constructor(x: number, y: number, radius: number);
    render(ctx: CanvasRenderingContext2D): void;
    move(delta: number): void;
}
//# sourceMappingURL=Circle.d.ts.map