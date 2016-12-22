function onGameOverHandler(points) {
    let message = 'Points: ' + points + '. Play again ?';
    let popup = new Popup(message);
    popup.displayPopup();
}

function restartGame() {
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
        document.addEventListener('game:restart', () => restartGame());
        document.addEventListener('snake:move', (event) => this.snakeMove(event));
        document.addEventListener('food:check', (event) => this.handleFood(event));
        document.addEventListener('points:add', (event) => this.handleScore(event));
        document.addEventListener('keydown', (event) => KeyboardHelper.onKeyDown(event));
    }
    
    snakeMove(event) {
        this.snake[event.detail]();
    }
    
    handleFood(event) {
        this.food.checkFood(event.detail);
    }
    
    handleScore(event) {
        this.score.updatePoints(1);
    }
    
    over() {
        MovementHelper.stop();
        let points = this.score.getPoints();
        onGameOverHandler(points);
    }
}

new GameSetup();
