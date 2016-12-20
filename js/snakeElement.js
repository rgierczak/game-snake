class SnakeElement {
    constructor(positions, boardMesh) {
        this.$body = null;
        this.position = null;
        
        this.init(positions, boardMesh);
    }
    
    init(positions, boardMesh) {
        this.createSnakeElement();
        this.setSnakeElementPosition(positions);
        this.setSnakeElementDistance(boardMesh);
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
        let isPredictedNumber = this.comparePositions(positions, property);
        if (isPredictedNumber)
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
    
    setSnakeElementDistance(boardMesh) {
        let leftDistance = boardMesh[this.position.y][this.position.x].x_pos;
        let topDistance = boardMesh[this.position.y][this.position.x].y_pos;
        this.$body.style.left = leftDistance + "px";
        this.$body.style.top = topDistance + "px";
    }
}
