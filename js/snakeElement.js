class SnakeElement {
    constructor(positions) {
        this.$body = null;
        this.position = null;
        
        this.init(positions);
    }
    
    init(positions) {
        this.createSnakeElement();
        this.setSnakeElementPosition(positions);
        this.setSnakeElementDistance();
    }
    
    setSnakeElementPosition(positions) {
        this.setPositionByCurrent(positions);
        this.setPositionByPredicted(positions);
    }
    
    comparePositions(positions, value) {
        let isValueNull = positions.predicted[value] == null;
        let isValueEqual = this.position[value] === positions.predicted[value];
        return !isValueNull && !isValueEqual;
    }
    
    setPositionByPredicted(positions) {
        let positionProperties = Object.keys(this.position);
        positionProperties.forEach((property) => {
            this.setElementPosition(positions, property);
        })
    }
    
    setElementPosition(positions, property) {
        let isPredictedYNumber = this.comparePositions(positions, property);
        if (isPredictedYNumber)
            this.position[property] = positions.predicted[property];
    }
    
    setPositionByCurrent(positions) {
        this.position = {
            x: positions.current.x,
            y: positions.current.y
        };
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
