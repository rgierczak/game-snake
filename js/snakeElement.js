function addToSnakeElementsArray(direction) {
    let $snake = Snake.$body;
    let snakeElementsSize = $snake.childElementCount;
    addSnakeElement($snake, snakeElementsSize, direction);
}

function addSnakeElement($snake, snakeElementsSize, direction) {
    let lastSnakeElement = $snake.childNodes[snakeElementsSize - 1];
    if ($snake && snakeElementsSize > 0)
        Snake.snakeElements.push(createSnakePositionElement(direction, lastSnakeElement));
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
    
    addToDOM(direction) {
        this.createSnakeElement();
        this.setSnakeElementDirection(direction);
        this.setSnakeElementDistance();
        Snake.$body.appendChild(this.$body);
    }
    
    setSnakeElementDirection(direction) {
        switch (direction) {
            default:
            case 1:
                this.positionX += 1;
                break;
            case 2:
                this.positionY += 1;
                break;
            case 3:
                this.positionX -= 1;
                break;
            case 4:
                this.positionY -= 1;
                break;
        }
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
}
