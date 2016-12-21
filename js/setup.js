class GameSetup {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => this.setup());
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
        document.addEventListener('game:over', () => this.over());
        document.addEventListener('snake:move', (event) => this.snakeMove(event));
        document.addEventListener('food:check', (event) => this.handleFood(event))
    }
    
    snakeMove(event) {
        this.snake[event.detail]();
    }
    
    handleFood(event) {
        this.food.checkFood(event.detail);
    }
    
    over() {
        MovementHelper.stop();
        document.removeEventListener('keydown', (event) => KeyboardHelper.onKeyDown);
        let confirmation = confirm('Game over. Play again ?');
        if (confirmation)
            window.location.reload();
    }
}

new GameSetup();
