import { Actor } from "./Actor.js";
export class Tree implements Actor {
 
private x: number;
private y: number;
private size: number = 100;

constructor(x: number, y: number, size: number) {
  this.x = x;
  this.y = y;
  if (size !== undefined) {
    this.size = size;
  }
}

  render(ctx: CanvasRenderingContext2D): void {
    const trunkWidth = this.size * 0.2;
    const trunkHeight = this.size * 0.5;
    const crownRadius = this.size * 0.4;
    

    ctx.fillStyle = "#8B4513"; 
    ctx.fillRect(this.x - trunkWidth / 2, this.y, trunkWidth, trunkHeight);
    
    ctx.fillStyle = "#228B22"; 
    ctx.beginPath();
    ctx.arc(this.x, this.y, crownRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x - crownRadius * 0.6, this.y - crownRadius * 0.6, crownRadius * 0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x + crownRadius * 0.6, this.y - crownRadius * 0.6, crownRadius * 0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y - crownRadius * 1.2, crownRadius * 0.6, 0, Math.PI * 2);
    ctx.fill();
  }
   
  update(delta: number): void {
    // Trees don't move, so no update logic needed
  }

}
