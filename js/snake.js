const DEFAULT_SNAKE_DIRECTION = 1;
const DEFAULT_SNAKE_SIZE = 10;
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
        this.snakeHeadPosition = { x: 0, y: 0 };
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
    
    moveSnakeHandler: function (condition, predictedPosition) {
        if (condition) {
            this.addSnakeHead(predictedPosition);
            this.removeSnakeTail();
        } else {
            Game.over();
        }
    },
    
    moveTop() {
        debugger;
        let $snakeHead = getLastElement(this.snakeElements);
        let predictedPosition = { x: null, y: $snakeHead.position.y - 1 };
        let movementCondition = this.checkVerticalMoveCase(predictedPosition);
        this.moveSnakeHandler(movementCondition, predictedPosition);
    },
    
    moveBottom() {
        let $snakeHead = getLastElement(this.snakeElements);
        let predictedPosition = { x: null, y: $snakeHead.position.y + 1 };
        let movementCondition = this.checkVerticalMoveCase(predictedPosition);
        this.moveSnakeHandler(movementCondition, predictedPosition);
    },
    
    moveLeft() {
        let $snakeHead = getLastElement(this.snakeElements);
        let predictedPosition = { x: $snakeHead.position.x - 1, y: null };
        let movementCondition = this.checkHorizontalMoveCase(predictedPosition);
        this.moveSnakeHandler(movementCondition, predictedPosition);
    },
    
    moveRight() {
        let $snakeHead = getLastElement(this.snakeElements);
        let predictedPosition = { x: $snakeHead.position.x + 1, y: null };
        let movementCondition = this.checkHorizontalMoveCase(predictedPosition);
        this.moveSnakeHandler(movementCondition, predictedPosition);
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
        let snakeInstance = new SnakeElement(this.snakeHeadPosition, predictedPosition);
        this.snakeHeadPosition = snakeInstance.position;
        this.snakeElements.push(snakeInstance);
    },
    
    displaySnakeElement ($snakeElement) {
        let $snakeBody = this.$body;
        $snakeBody.appendChild($snakeElement);
    },
    
    checkHorizontalMoveCase(predictedPosition) {
        return (predictedPosition.x >= 0 && predictedPosition.x < Board.elementSize);
    },
    
    checkVerticalMoveCase(predictedPosition) {
        return (predictedPosition.y >= 0 && predictedPosition.y < Board.elementsMesh.length);
    }
};
