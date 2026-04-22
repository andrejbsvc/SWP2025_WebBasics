import { Circle } from "./Circle.js";
export class SuperCircle extends Circle {
  constructor(
    x: number,
    y: number,
    radius: number,
    public speed: number = 50,
  ) {
    super(x, y, radius);
  }

  sayHello(): void {
    console.log("Hello from SuperCircle!");
  }

  move(delta: number): void {
    // Call the move method from Circle
    this.y += delta * 50; // Additional movement in the y direction
  }
}
