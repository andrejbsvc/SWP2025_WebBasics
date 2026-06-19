import { MoveStrategy } from "./MoveStrategy.js";
export class RightMovement {
    constructor(
        private x: number,
        private y: number,
        private speed: number = 200
    ) {}

    update(delta: number, x: number) {
       this.x += 200 * delta;
         if (this.x > 800) { 
            this.x = 0;
        }
    }

    getX(): number {
        return this.x;
    }
    
    getY(): number {
        return this.y;
    }
}