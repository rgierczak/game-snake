const DEFAULT_SNAKE_DIRECTION = 1;
const DEFAULT_SNAKE_SIZE = 3;

let Snake = {
    snakeDOMElements: [],
    snakeElement: {},
    $body: null,
    
    init() {
        this.setupSnake();
        this.setupHandlers();
    },
    
    setupHandlers() {
        document.addEventListener('keydown', (event) => {
            KeyboardHandler.onKeyDown(event);
        });
    },
    
    setupSnake() {
        let $board = document.getElementById('snake-board');
        let $snakeBody = this.createSnake();
        if ($board)
            this.addSnakeToBoard($board, $snakeBody);
    },
    
    createSnake() {
        let $snake = document.createElement('div');
        $snake.setAttribute('id', 'snake');
        return $snake;
    },
    
    addSnakeToElementsArray: function () {
        this.snakeElement = new SnakeElement();
        for (let i = 0; i < DEFAULT_SNAKE_SIZE; i++)
            this.snakeElement.addToSnake(DEFAULT_SNAKE_DIRECTION);
    },
    
    removeSnakeFromElementsArray: function () {
        if(this.snakeDOMElements && this.snakeDOMElements.length > 0)
            this.snakeDOMElements.splice(0,1);
    },
    
    addSnakeToBoard: function ($board, $snakeBody) {
        this.$body = $snakeBody;
        this.addSnakeToElementsArray();
        $board.appendChild($snakeBody);
    },
    
    isMovePossible: function (direction) {
        return true;
    }
};
