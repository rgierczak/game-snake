const SNAKE_SIZE = 3;
const SNAKE_MOVEMENT_SPEED = 100;

function removeElementFromDOM() {
    let list = document.getElementById('snake');
    if (list.childElementCount)
        list.removeChild(list.childNodes[0]);
}

class Snake extends Part {
    constructor(board) {
        super();
        this.clock = null;
        this.board = board;
        this.snakeElements = [];
        this.snakeHeadPosition = { x: 0, y: 0 };
        this.snakeDirection = null;
        this.setupSnake();
        this.setupListeners();
    }
    
    setupSnake() {
        this.setupSnakeBody();
        this.createSnakeElements();
        this.displaySnake();
        this.setupSnakeMovement();
    }
    
    setupSnakeMovement() {
        this.setSnakeDirection(this.moveRight);
        this.startMovement();
    }
    
    setupListeners() {
        document.addEventListener('keydown:moveUp', () => this.setSnakeDirection(this.moveUp));
        document.addEventListener('keydown:moveLeft', () => this.setSnakeDirection(this.moveLeft));
        document.addEventListener('keydown:moveRight', () => this.setSnakeDirection(this.moveRight));
        document.addEventListener('keydown:moveDown', () => this.setSnakeDirection(this.moveDown));
    }
    
    startMovement() {
        this.clock = setInterval(() => {
            this.snakeDirection();
        }, SNAKE_MOVEMENT_SPEED);
    }
    
    setSnakeDirection(direction) {
        this.snakeDirection = direction;
    }
    
    moveSnake(predictedPosition) {
        this.addSnakeHead(predictedPosition);
        this.removeSnakeTail();
    }
    
    isBoardCollision(direction) {
        let axis = direction.axis;
        let boardSize = this.board.getBoardSize();
        return !(direction[axis] >= 0 && direction[axis] < boardSize[axis]);
    }
    
    isSnakeCollision(direction) {
        let isCollision = false;
        this.snakeElements.forEach((element) => {
            if (Utils.compare(element, direction))
                isCollision = true;
        });
        return isCollision;
    }
    
    checkCollision(direction) {
        if (this.isBoardCollision(direction) || this.isSnakeCollision(direction)) {
            document.dispatchEvent(new Event('game:over'));
        } else {
            this.handleMovement(direction);
        }
    }
    
    handleMovement(direction) {
        this.moveSnake(direction);
        document.dispatchEvent(new CustomEvent('food:check', {
            detail: direction
        }));
    }
    
    displaySnake() {
        this.snakeElements.forEach(($element) => {
            this.render($element.$body);
        });
    }
    
    setupSnakeBody() {
        let $board = document.getElementById('snake-board');
        this.$body = this.createPart('div', 'snake');
        if ($board)
            this.render(this.$body, $board);
    }
    
    createSnakeElements() {
        for (let i = 0; i < SNAKE_SIZE; i++)
            this.createSnakeElement(this.snakeHeadPosition);
    }
    
    removeElementFromArray() {
        let elements = this.snakeElements;
        if (elements && elements.length)
            elements.splice(0, 1);
    }
    
    removeSnakeTail() {
        this.removeElementFromArray();
        removeElementFromDOM();
    }
    
    getSnakeHead() {
        let snakeElements = this.snakeElements;
        if (snakeElements && snakeElements.length)
            return snakeElements[snakeElements.length - 1];
        return null;
    }
    
    addSnakeHead(predictedPosition) {
        this.createSnakeElement(predictedPosition);
        let $snakeHead = this.getSnakeHead();
        this.render($snakeHead.$body);
    }
    
    moveUp() {
        let $snakeHead = this.getSnakeHead();
        let direction = {
            axis: 'y',
            x: $snakeHead.position.x,
            y: $snakeHead.position.y - 1
        };
        this.checkCollision(direction);
    }
    
    moveDown() {
        let $snakeHead = this.getSnakeHead();
        let direction = {
            axis: 'y',
            x: $snakeHead.position.x,
            y: $snakeHead.position.y + 1
        };
        this.checkCollision(direction);
    }
    
    moveLeft() {
        let $snakeHead = this.getSnakeHead();
        let direction = {
            axis: 'x',
            x: $snakeHead.position.x - 1,
            y: $snakeHead.position.y
        };
        this.checkCollision(direction);
    }
    
    moveRight() {
        let $snakeHead = this.getSnakeHead();
        let direction = {
            axis: 'x',
            x: $snakeHead.position.x + 1,
            y: $snakeHead.position.y
        };
        this.checkCollision(direction);
    }
    
    createSnakeElement(predictedPosition) {
        let positions = this.buildPositionsObject(predictedPosition);
        let snakeInstance = new SnakeElement(positions, this.board);
        this.snakeHeadPosition = snakeInstance.position;
        this.snakeElements.push(snakeInstance);
    }
    
    buildPositionsObject(predictedPosition) {
        return {
            current: this.snakeHeadPosition,
            predicted: predictedPosition
        }
    }
}
