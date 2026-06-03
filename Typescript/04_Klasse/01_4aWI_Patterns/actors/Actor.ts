export interface Actor {
    render(ctx: CanvasRenderingContext2D): void;
    update(delta: number): void;
    
}