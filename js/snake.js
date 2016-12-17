const DEFAULT_SNAKE_DIRECTION = 1;
const DEFAULT_SNAKE_SIZE = 3;

let Snake = {
    snakeElements: [],
    $body: null,
    
    createSnakeFromElements: function () {
        let snakeElement = new SnakeElement();
        for (let i = 0; i < DEFAULT_SNAKE_SIZE; i++)
            snakeElement.addElementToSnake();
    },
    
    addSnakeToBoard: function ($board, $snakeBody) {
        this.$body = $snakeBody;
        this.createSnakeFromElements();
        $board.appendChild($snakeBody);
    },
    
    init() {
        let $board = document.getElementById('snake-board');
        let $snakeBody = this.createSnake();
        if ($board)
            this.addSnakeToBoard($board, $snakeBody);
    },
    
    createSnake() {
        let $snake = document.createElement('div');
        $snake.setAttribute('id', 'snake');
        return $snake;
    }
};
