export interface MoveStrategy {
    update(delta: number, x: number): void;
    getX(): number;
    getY(): number;
}