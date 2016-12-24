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
        document.addEventListener('game:over', (event) => this.over());
        document.addEventListener('game:start', (event) => this.startGame());
        document.addEventListener('game:restart', (event) => restartGame());
        document.addEventListener('food:check', (event) => this.handleFood(event));
        document.addEventListener('points:add', (event) => this.handleScore(event));
        document.addEventListener('keydown', KeyboardHelper.onKeyDown.bind(this));
    }
    
    startGame() {
        let isGameRunning = this.snake.clock;
        if (!isGameRunning)
            this.snake.startMovement();
    }
    
    handleFood(event) {
        this.food.checkFood(event.detail);
    }
    
    handleScore() {
        this.score.updatePoints(1);
    }
    
    over() {
        let points = this.score.getPoints();
        clearInterval(this.snake.clock);
        onGameOverHandler(points);
    }
}

new GameSetup();
