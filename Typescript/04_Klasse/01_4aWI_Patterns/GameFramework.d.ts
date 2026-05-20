/**
 * Simple 2D Game Framework
 * Provides canvas management, game loop, and basic rendering
 */
/**
 * GameObject Interface
 */
interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    update?: (deltaTime: number) => void;
    render?: (ctx: CanvasRenderingContext2D) => void;
}
/**
 * Game Interface
 * All concrete games must implement these methods
 */
declare abstract class Game {
    /**
     * Initialize the game
     * @abstract
     */
    abstract init(): void;
    /**
     * Update game state every frame
     * @abstract
     * @param {number} deltaTime - Time since last frame in seconds
     */
    abstract update(deltaTime: number): void;
    /**
     * Render game to canvas
     * @abstract
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     */
    abstract render(ctx: CanvasRenderingContext2D): void;
}
declare class GameFramework {
    private game;
    private width;
    private height;
    private gameObjects;
    private running;
    private canvas;
    private ctx;
    private deltaTime;
    private lastFrameTime;
    /**
     * @param {Game} game - A game instance that implements the Game interface
     * @param {number} width - Canvas width
     * @param {number} height - Canvas height
     * @param {string} canvasId - Canvas element ID
     */
    constructor(game: Game, width?: number, height?: number, canvasId?: string);
    /**
     * Add a game object to the scene
     * @param {GameObject} obj - Object with x, y, width, height, and optional update/render methods
     */
    addObject(obj: GameObject): void;
    /**
     * Remove a game object from the scene
     * @param {GameObject} obj - The object to remove
     */
    removeObject(obj: GameObject): void;
    /**
     * Update all game objects
     */
    private updateObjects;
    /**
     * Render all game objects
     */
    private renderObjects;
    /**
     * Clear canvas with background color
     */
    clearCanvas(color?: string): void;
    /**
     * Main game loop
     */
    private gameLoop;
    /**
     * Start the game
     */
    start(): void;
    /**
     * Stop the game
     */
    stop(): void;
    /**
     * Draw a rectangle
     */
    drawRect(x: number, y: number, width: number, height: number, color?: string): void;
    /**
     * Draw a circle
     */
    drawCircle(x: number, y: number, radius: number, color?: string): void;
    /**
     * Draw text
     */
    drawText(text: string, x: number, y: number, color?: string, fontSize?: number): void;
}
export { Game, GameFramework };
export type { GameObject };
//# sourceMappingURL=GameFramework.d.ts.map