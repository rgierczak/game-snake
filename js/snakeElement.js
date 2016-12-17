function addToSnakeElementsArray(direction) {
    let $snake = Snake.$body;
    let snakeElementsSize = $snake.childElementCount;
    addSnakeElement($snake, snakeElementsSize, direction);
}

function addSnakeElement($snake, snakeElementsSize, direction) {
    let lastSnakeElement = $snake.childNodes[snakeElementsSize - 1];
    if ($snake && snakeElementsSize > 0)
        Snake.snakeDOMElements.push(createSnakePositionElement(direction, lastSnakeElement));
}

function createSnakePositionElement(direction, lastSnakeElement) {
    return {
        direction,
        left: parseInt(lastSnakeElement.style.left),
        top: parseInt(lastSnakeElement.style.top)
    };
}

class SnakeElement {
    constructor() {
        this.$body = null;
        this.positionX = 1;
        this.positionY = 1;
        this.leftDistance = 0;
        this.topDistance = 0;
    }
    
    addToSnake(direction) {
        this.addToDOM(direction);
        addToSnakeElementsArray(direction);
    }
    
    removeFromSnake() {
        this.removeFromDOM();
        Snake.removeSnakeFromElementsArray();
    }
    
    removeFromDOM() {
        let list = document.getElementById('snake');
        if(list.childElementCount > 0)
            list.removeChild(list.childNodes[0]);
    }
    
    addToDOM(direction) {
        this.createSnakeElement();
        this.setSnakeElementDirection(direction);
        this.setSnakeElementDistance();
        Snake.$body.appendChild(this.$body);
    }
    
    setSnakeElementDistance() {
        this.leftDistance = Board.elementsMesh[this.positionY][this.positionX].x_pos;
        this.topDistance = Board.elementsMesh[this.positionY][this.positionX].y_pos;
        this.$body.style.left = this.leftDistance + "px";
        this.$body.style.top = this.topDistance + "px";
    }
    
    createSnakeElement() {
        let $element = document.createElement('div');
        $element.setAttribute('class', 'snake-element');
        this.$body = $element;
    }
    
    setSnakeElementDirection(direction) {
        switch (direction) {
            default:
            case DIRECTIONS.RIGHT:
                this.positionX += 1;
                break;
            case DIRECTIONS.TOP:
                this.positionY -= 1;
                break;
            case DIRECTIONS.LEFT:
                this.positionX -= 1;
                break;
            case DIRECTIONS.BOTTOM:
                this.positionY += 1;
                break;
        }
    }
    
    modifyElement(direction) {
        this.addToSnake(direction);
        this.removeFromSnake();
    }
    
    move(direction) {
        switch (direction) {
            case 1:
                console.log('1');
                if (this.positionX < Board.elementsMesh[0].length - 1 &&
                    Snake.isMovePossible(direction)) {
                    this.modifyElement(direction);
                } else {
                    MovementHandler.stop();
                }
                break;
            case 2:
                console.log('2');
                if (this.positionY < Board.elementsMesh.length - 1 &&
                    Snake.isMovePossible(direction)) {
                    this.modifyElement(direction);
                } else {
                    MovementHandler.stop();
                }
                break;
            case 3:
                console.log('3');
                if (this.positionX > 0 &&
                    Snake.isMovePossible(direction)) {
                    this.modifyElement(direction);
                } else {
                    MovementHandler.stop();
                }
                break;
            case 4:
                console.log('4');
                if (this.positionY > 0 &&
                    Snake.isMovePossible(direction)) {
                    this.modifyElement(direction);
                } else {
                    MovementHandler.stop();
                }
                break;
            default:
                this.addToSnake(1);
                break;
        }
    };
}
