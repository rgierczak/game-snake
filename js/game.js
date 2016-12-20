function addListener(event, callback) {
    document.addEventListener(event, callback);
}

class Game {
    constructor() {
        addListener('DOMContentLoaded', () => this.setup());
    }
    
    setup() {
        console.log('setup Game');
        this.setupGameElements();
        this.setupListeners();
    }
    
    setupGameElements() {
        this.board = new Board;
        this.snake = new Snake(this.board);
        this.food = new Food(this.board, this.snake);
    }
    
    setupListeners() {
        addListener('game:over', () => this.over());
        addListener('snake:move', (event) => this.snakeMove(event));
        addListener('food:check', (event) => this.handleFood(event))
    }
    
    snakeMove(event) {
        this.snake[event.detail]();
    }
    
    handleFood(event) {
        this.food.checkFood(event.detail);
    }
    
    over() {
        MovementHandler.stop();
        console.log('Game Over');
    }
}

new Game();
