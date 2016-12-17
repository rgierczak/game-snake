class SnakeElement {
    constructor(position, direction) {
        this.$body = null;
        this.position = {
            x: 0,
            y: 0
        };
        
        this.init(position, direction);
    }
    
    init(position, direction) {
        this.createSnakeElement();
        this.setSnakeElementPosition(position);
        this.setSnakeElementDirection(direction);
        this.setSnakeElementDistance();
    }
    
    setSnakeElementPosition(position) {
        [this.position.x, this.position.y] = [position.x, position.y];
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
                this.position.x += 1;
                break;
            case DIRECTIONS.TOP:
                this.position.y -= 1;
                break;
            case DIRECTIONS.LEFT:
                this.position.x -= 1;
                break;
            case DIRECTIONS.BOTTOM:
                this.position.y += 1;
                break;
        }
    }
    
    setSnakeElementDistance() {
        let leftDistance = Board.elementsMesh[this.position.y][this.position.x].x_pos;
        let topDistance = Board.elementsMesh[this.position.y][this.position.x].y_pos;
        this.$body.style.left = leftDistance + "px";
        this.$body.style.top = topDistance + "px";
    }
}
