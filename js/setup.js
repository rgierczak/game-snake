function playAgainHandler(points) {
    let message = 'Points: ' +  points + '. Play again ?';
    let confirmation = confirm(message);
    if (confirmation)
        window.location.reload();
}

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
        this.score = new Score();
    }
    
    setupListeners() {
        document.addEventListener('game:over', () => this.over());
        document.addEventListener('snake:move', (event) => this.snakeMove(event));
        document.addEventListener('food:check', (event) => this.handleFood(event));
        document.addEventListener('points:add', (event) => this.handleScore(event))
    }
    
    snakeMove(event) {
        this.snake[event.detail]();
    }
    
    handleFood(event) {
        this.food.checkFood(event.detail);
    }
    
    handleScore(event) {
        this.score.addPoint();
    }
    
    over() {
        MovementHelper.stop();
        document.removeEventListener('keydown', (event) => KeyboardHelper.onKeyDown);
        let points = this.score.getPoints();
        playAgainHandler(points);
    }
}

new GameSetup();
