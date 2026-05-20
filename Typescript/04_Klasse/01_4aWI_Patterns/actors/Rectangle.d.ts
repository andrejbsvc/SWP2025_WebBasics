import { Actor } from "./Actor.js";
export declare class Rectangle implements Actor {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    render(ctx: CanvasRenderingContext2D): void;
    move(delta: number): void;
    sayHello(): void;
}
//# sourceMappingURL=Rectangle.d.ts.map