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
    snakeHeadPosition: {
        x: 0,
        y: 0
    },
    
    init() {
        this.setupSnake();
        this.setupHandlers();
    },
    
    setupSnake() {
        this.setupSnakeBody();
        this.createSnakeElements();
        this.displaySnake();
    },
    
    setupHandlers() {
        document.addEventListener(KEYDOWN_EVENT_NAME, (event) => {
            KeyboardHandler.onKeyDown(event);
        });
    },
    
    moveSnake (predictedPosition) {
        this.addSnakeHead(predictedPosition);
        this.removeSnakeTail();
    },
    
    isMovePossible: function (direction) {
        let axis = direction.axis;
        return (direction[axis] >= 0 && direction[axis] < Board.getBoardSize(axis));
    },
    
    checkSnakeCollision(direction) {
        this.snakeElements.forEach((el) => {
            let isMovePossible = CollisionHandler.compareObject(el, direction);
            if (isMovePossible)
                console.log('snake collision');
        });
    },
    
    checkBoardCollision(direction) {
        //TODO: a może lepiej 
        // let eventName = this.isMovePossible(direction) ? 'move' : 'board:collision';
        // document.dispatchEvent(new Event(eventName));
        
        if (this.isMovePossible(direction))
            this.handleMovement(direction);
        else
            document.dispatchEvent(new Event('board:collision'));
    },
    
    handleMovement: function (direction) {
        this.moveSnake(direction);
        Food.checkFood(direction);
    },
    
    //CollisionHandler.checkSnakeCollision(Snake.snakeElements, predictedPosition);
    
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
    
    createSnakeElements() {
        for (let i = 0; i < DEFAULT_SNAKE_SIZE; i++)
            this.createSnakeElement(this.snakeHeadPosition);
    },
    
    removeElementFromArray() {
        if (this.snakeElements && this.snakeElements.length)
            this.snakeElements.splice(0, 1);
    },
    
    removeElementFromDOM() {
        let list = document.getElementById('snake');
        if (list.childElementCount)
            list.removeChild(list.childNodes[0]);
    },
    
    removeSnakeTail() {
        this.removeElementFromArray();
        this.removeElementFromDOM();
    },
    
    addSnakeHead(predictedPosition) {
        this.createSnakeElement(predictedPosition);
        let $snakeHead = getLastElement(this.snakeElements);
        this.displaySnakeElement($snakeHead.$body);
    },
    
    checkCollision(direction) {
        this.checkBoardCollision(direction);
        this.checkSnakeCollision(direction);
    },
    
    moveTop() {
        let $snakeHead = getLastElement(this.snakeElements);
        let direction = {
            axis: 'y',
            x: $snakeHead.position.x,
            y: $snakeHead.position.y - 1
        };
        this.checkCollision(direction);
    },
    
    moveBottom() {
        let $snakeHead = getLastElement(this.snakeElements);
        let direction = {
            axis: 'y',
            x: $snakeHead.position.x,
            y: $snakeHead.position.y + 1
        };
        this.checkCollision(direction);
    },
    
    moveLeft() {
        let $snakeHead = getLastElement(this.snakeElements);
        let direction = {
            axis: 'x',
            x: $snakeHead.position.x - 1,
            y: $snakeHead.position.y
        };
        this.checkCollision(direction);
    },
    
    moveRight() {
        let $snakeHead = getLastElement(this.snakeElements);
        let direction = {
            axis: 'x',
            x: $snakeHead.position.x + 1,
            y: $snakeHead.position.y
        };
        this.checkCollision(direction);
    },
    
    addSnakeToBoard($board, $snakeBody) {
        $board.appendChild($snakeBody);
    },
    
    createSnakeBody() {
        let $snake = document.createElement('div');
        $snake.setAttribute('id', 'snake');
        return $snake;
    },
    
    createSnakeElement(predictedPosition) {
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
    
    displaySnakeElement($snakeElement) {
        let $snakeBody = this.$body;
        $snakeBody.appendChild($snakeElement);
    }
};
