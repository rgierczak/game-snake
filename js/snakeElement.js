class SnakeElement {
    constructor(position, direction) {
        this.$body = null;
        this.position = null;

        this.init(position, direction);
    }
    
    init(position, direction) {
        this.setupSnakeElement(position, direction);
    }
    
    setupSnakeElement(position, direction) {
        this.createSnakeElement();
        this.setSnakeElementDirection(position, direction);
        this.setSnakeElementDistance();
    }
    
    createSnakeElement() {
        let $element = document.createElement('div');
        $element.setAttribute('class', 'snake-element');
        this.$body = $element;
    }
    
    setSnakeElementDistance() {
        let leftDistance = this.getBoardMeshElement().x_pos;
        let topDistance = this.getBoardMeshElement().y_pos;
        this.setSnakeBodyDistance(leftDistance, topDistance);
    }
    
    setSnakeBodyDistance(leftDistance, topDistance) {
        this.$body.style.left = leftDistance + "px";
        this.$body.style.top = topDistance + "px";
    }
    
    getBoardMeshElement() {
        return Board.elementsMesh[this.position.y][this.position.x];
    }
    
    setSnakeElementDirection(position, direction) {
        this.position = { x: position.x, y: position.y };

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
}
