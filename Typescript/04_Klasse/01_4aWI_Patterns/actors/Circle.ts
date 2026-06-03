export class Circle {

private x: number;
private y: number;
private radius: number = 40;

constructor(x: number, y: number, radius: number) {
  this.x = x;
  this.y = y;
  if (radius !== undefined) {
    this.radius = radius;
  }
}

render(ctx: CanvasRenderingContext2D): void {
  ctx.fillStyle = "#da1616c9";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fill();
}

update(delta: number): void {
  this.x += 200 * delta; 
}
}