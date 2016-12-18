class SnakeElement {
    constructor(position, predictedPosition) {
        this.$body = null;
        this.position = null;

        this.init(position, predictedPosition);
    }
    
    init(position, predictedPosition) {
        this.setupSnakeElement(position, predictedPosition);
    }
    
    setupSnakeElement(position, predictedPosition) {
        this.createSnakeElement();
        this.updateSnakeElementPosition(position, predictedPosition);
        this.setSnakeElementDistance();
    }
    
    updateSnakeElementPosition(position, predictedPosition) {
        this.position = { x: position.x, y: position.y };
        if (typeof (predictedPosition.x) === "number" && this.position.x != predictedPosition.x) {
            this.position.x = predictedPosition.x;
        }
        if (typeof (predictedPosition.y) === "number" && position.y != predictedPosition.y) {
            this.position.y = predictedPosition.y;
        }
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
}
