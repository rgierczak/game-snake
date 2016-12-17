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
            this.createSnakeElement(DEFAULT_SNAKE_DIRECTION);
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
    
    addSnakeHead: function (direction) {
        this.createSnakeElement(direction);
        let $snakeHead = getLastElement(this.snakeElements);
        this.displaySnakeElement($snakeHead.$body);
    },
    
    moveSnakeHandler: function (direction) {
        this.addSnakeHead(direction);
        this.removeSnakeTail();
    },
    
    move(direction) {
        let isMovePossible = this.isMovePossible(direction);
        if (isMovePossible) {
            this.moveSnakeHandler(direction);
        } else {
            Game.over();
        }
    },
    
    addSnakeToBoard: function ($board, $snakeBody) {
        $board.appendChild($snakeBody);
    },
    
    createSnakeBody() {
        let $snake = document.createElement('div');
        $snake.setAttribute('id', 'snake');
        return $snake;
    },
    
    createSnakeElement: function (direction) {
        let snakeInstance = new SnakeElement(this.snakeHeadPosition, direction);
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
    
    checkVericalMoveCase(predictedPosition) {
        return (predictedPosition.y >= 0 && predictedPosition.y < Board.elementsMesh.length)
    },
    
    isMovePossible: function (direction) {
        let $snakeHead = getLastElement(this.snakeElements);
        let condition = null;
        let predictedPosition = { x: null, y: null };
        
        switch (direction) {
            case DIRECTIONS.LEFT:
                predictedPosition.x = $snakeHead.position.x - 1;
                condition = this.checkHorizontalMoveCase(predictedPosition);
                break;
            
            case DIRECTIONS.RIGHT:
                debugger;
                predictedPosition.x = $snakeHead.position.x + 1;
                condition = this.checkHorizontalMoveCase(predictedPosition);
                break;
            
            case DIRECTIONS.TOP:
                predictedPosition.y = $snakeHead.position.y - 1;
                condition = this.checkVericalMoveCase(predictedPosition);
                break;
            
            case DIRECTIONS.BOTTOM:
                predictedPosition.y = $snakeHead.position.y + 1;
                condition = this.checkVericalMoveCase(predictedPosition);
                break;
            
            default:
            // No default action.
        }
        
        return condition;
    }
};
