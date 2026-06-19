import { Circle } from "./Circle.js";
export class SuperCircle extends Circle {
  constructor(
    x: number,
    y: number,
    radius: number,
    public speed: number = 50,
  ) {
    super({ getX: () => x, getY: () => y, update: (delta: number) => {
      x += speed * delta;
    }}, radius);    
  }

  sayHello(): void {
    console.log("Hello from SuperCircle!");
  }

}
