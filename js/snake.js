const DEFAULT_SNAKE_SIZE = 30;
const KEYDOWN_EVENT_NAME = 'keydown';

function getLastElement(array) {
    if (array && array.length)
        return array[array.length - 1];
    return null;
}

let Snake = {
    $body: null,
    snakeElements: [],
    snakeHeadPosition: {},
    
    init() {
        this.setupSnake();
        this.setupHandlers();
    },
    
    setupSnake() {
        this.setupSnakeHeadPosition();
        this.setupSnakeBody();
        this.createSnakeElements();
        this.displaySnake();
    },
    
    setupSnakeHeadPosition() {
        this.snakeHeadPosition = {
            x: 0,
            y: 0
        };
    },
    
    setupHandlers() {
        document.addEventListener(KEYDOWN_EVENT_NAME, (event) => {
            KeyboardHandler.onKeyDown(event);
        });
    },
    
    displaySnake() {
        let $snakeElements = this.snakeElements;
        $snakeElements.forEach(($element) => {
            this.displaySnakeElement($element.$body);
        });
    },
    
    setupSnakeBody() {
        let $board = document.getElementById('snake-board');
        this.$body = this.createSnakeBody();
        if ($board)
            this.addSnakeToBoard($board, this.$body);
    },
    
    createSnakeElements: function () {
        for (let i = 0; i < DEFAULT_SNAKE_SIZE; i++)
            this.createSnakeElement(this.snakeHeadPosition);
    },
    
    removeElementFromArray () {
        if (this.snakeElements && this.snakeElements.length)
            this.snakeElements.splice(0, 1);
    },
    
    removeElementFromDOM () {
        let list = document.getElementById('snake');
        if (list.childElementCount)
            list.removeChild(list.childNodes[0]);
    },
    
    removeSnakeTail() {
        this.removeElementFromArray();
        this.removeElementFromDOM();
    },
    
    addSnakeHead: function (predictedPosition) {
        this.createSnakeElement(predictedPosition);
        let $snakeHead = getLastElement(this.snakeElements);
        this.displaySnakeElement($snakeHead.$body);
    },
    
    setPredictedPositionForTop: function () {
        let $snakeHead = getLastElement(this.snakeElements);
        return {
            x: $snakeHead.position.x,
            y: $snakeHead.position.y - 1
        };
    },
    
    setPredictedPositionForBottom: function () {
        let $snakeHead = getLastElement(this.snakeElements);
        return {
            x: $snakeHead.position.x,
            y: $snakeHead.position.y + 1
        };
    },
    
    setPredictedPositionForLeft: function () {
        let $snakeHead = getLastElement(this.snakeElements);
        return {
            x: $snakeHead.position.x - 1,
            y: $snakeHead.position.y,
        };
    },
    
    setPredictedPositionForRight: function () {
        let $snakeHead = getLastElement(this.snakeElements);
        return {
            x: $snakeHead.position.x + 1,
            y: $snakeHead.position.y
        };
    },
    
    addSnakeToBoard: function ($board, $snakeBody) {
        $board.appendChild($snakeBody);
    },
    
    createSnakeBody() {
        let $snake = document.createElement('div');
        $snake.setAttribute('id', 'snake');
        return $snake;
    },
    
    createSnakeElement: function (predictedPosition) {
        let positions = this.buildSnakeElementPositions(predictedPosition);
        let snakeInstance = new SnakeElement(positions);
        this.snakeHeadPosition = snakeInstance.position;
        this.snakeElements.push(snakeInstance);
    },
    
    buildSnakeElementPositions(predictedPosition) {
        return {
            current: this.snakeHeadPosition,
            predicted: predictedPosition
        }
    },
    
    displaySnakeElement ($snakeElement) {
        let $snakeBody = this.$body;
        $snakeBody.appendChild($snakeElement);
    },
};
