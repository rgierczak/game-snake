class SnakeElement extends GameElement {
    constructor(positions, board) {
        super();
        this.board = board;
        this.init(positions);
    }
    
    init(positions) {
        this.createElement('snake-element');
        this.setSnakeElementPosition(positions);
        this.setElementDistance();
    }
    
    setPosition(positions, property) {
        this.position[property] = positions.current[property];
        let predicted = positions.predicted[property];
        
        if (predicted != null && this.position[property] != predicted)
            this.position[property] = predicted;
    }
    
    setSnakeElementPosition(positions) {
        let positionProperties = Object.keys(this.position);
        positionProperties.forEach((property) => {
            this.setPosition(positions, property);
        })
    }
}
