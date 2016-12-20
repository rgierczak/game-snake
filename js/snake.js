const DEFAULT_SNAKE_SIZE = 30;
const KEYDOWN_EVENT_NAME = 'keydown';

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
    
    isBoardCollision(direction) {
        let axis = direction.axis;
        return !(direction[axis] >= 0 && direction[axis] < Board.getBoardSize(axis));
    },
    
    isSnakeCollision(direction) {
        let isCollision = false;
        this.snakeElements.forEach((element) => {
            if (Helper.compare(element, direction))
                isCollision = true;
        });
        return isCollision;
    },
    
    checkCollision(direction) {
        if (this.isBoardCollision(direction) || this.isSnakeCollision(direction))
            document.dispatchEvent(new Event('collision'));
        else
            this.handleMovement(direction);
    },
    
    handleMovement(direction) {
        this.moveSnake(direction);
        Food.checkFood(direction);
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
    
    getSnakeHead() {
        let snakeElements = this.snakeElements;
        if (snakeElements && snakeElements.length)
            return snakeElements[snakeElements.length - 1];
        return null;
    },
    
    addSnakeHead(predictedPosition) {
        this.createSnakeElement(predictedPosition);
        let $snakeHead = this.getSnakeHead();
        this.displaySnakeElement($snakeHead.$body);
    },
    
    moveTop() {
        let $snakeHead = this.getSnakeHead();
        let direction = {
            axis: 'y',
            x: $snakeHead.position.x,
            y: $snakeHead.position.y - 1
        };
        this.checkCollision(direction);
    },
    
    moveBottom() {
        let $snakeHead = this.getSnakeHead();
        let direction = {
            axis: 'y',
            x: $snakeHead.position.x,
            y: $snakeHead.position.y + 1
        };
        this.checkCollision(direction);
    },
    
    moveLeft() {
        let $snakeHead = this.getSnakeHead();
        let direction = {
            axis: 'x',
            x: $snakeHead.position.x - 1,
            y: $snakeHead.position.y
        };
        this.checkCollision(direction);
    },
    
    moveRight() {
        let $snakeHead = this.getSnakeHead();
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
        let positions = this.buildPositionsObject(predictedPosition);
        let snakeInstance = new SnakeElement(positions);
        this.snakeHeadPosition = snakeInstance.position;
        this.snakeElements.push(snakeInstance);
    },
    
    buildPositionsObject(predictedPosition) {
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
