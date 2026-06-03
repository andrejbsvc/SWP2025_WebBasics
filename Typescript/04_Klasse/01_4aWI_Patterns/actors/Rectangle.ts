import { Actor } from "./Actor.js";
export class Rectangle implements Actor {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(delta: number): void {
    console.log("in update of rect");
    
    this.x += delta * 100; // Move 100 pixels per second
    if (this.x > 800) {
      this.x = -this.width; // Wrap around to the left
    }
  }

  sayHello(): void {
    console.log("Hello from Rectangle!");
  }
}
