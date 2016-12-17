class SnakeElement {
    constructor() {
        this.$snakeElementBody = null;
        this.positionX = 1;
        this.positionY = 1;
        this.leftDistance = 0;
        this.topDistance = 0;
    }
    
    addElementToSnake(direction) {
        this.addToDOM(direction);
    }
    
    addToDOM(direction) {
        this.createSnakeElement();
        this.setSnakeElementDirection(direction);
        this.setSnakeElementDistance();
        Snake.$body.appendChild(this.$snakeElementBody);
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
        this.$snakeElementBody.style.left = this.leftDistance + "px";
        this.$snakeElementBody.style.top = this.topDistance + "px";
    }
    
    createSnakeElement() {
        let $element = document.createElement('div');
        $element.setAttribute('class', 'snake-element');
        this.$snakeElementBody = $element;
    }
}
