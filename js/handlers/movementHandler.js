const SNAKE_MOVEMENT_SPEED = 40;

function checkMove(predictedPosition, property, boardSize) {
    let isSnakeCollision = CollisionHandler.checkSnakeCollision(Snake.snakeElements, predictedPosition);
    let isBoardCollision = CollisionHandler.checkBoardCollision(predictedPosition, property, boardSize);
    return isBoardCollision && isSnakeCollision;
}

let MovementHandler = {
    stop() {
        clearInterval(this.clock);
    },
    
    handle(method) {
        this.stop();
        this.clock = setInterval(
            () => MovementHandler[method](),
            SNAKE_MOVEMENT_SPEED);
    },
    
    moveTop() {
        let predictedPosition = Snake.setPredictedPositionForTop();
        let movementCondition = checkMove(predictedPosition, 'y', Board.elementsMesh.length);
        this.moveHandler(movementCondition, predictedPosition);
    },
    
    moveBottom() {
        let predictedPosition = Snake.setPredictedPositionForBottom();
        let movementCondition = checkMove(predictedPosition, 'y', Board.elementsMesh.length);
        this.moveHandler(movementCondition, predictedPosition);
    },
    
    moveLeft() {
        let predictedPosition = Snake.setPredictedPositionForLeft();
        let movementCondition = checkMove(predictedPosition, 'x', Board.elementSize);
        this.moveHandler(movementCondition, predictedPosition);
    },
    
    moveRight() {
        let predictedPosition = Snake.setPredictedPositionForRight();
        let movementCondition = checkMove(predictedPosition, 'x', Board.elementSize);
        this.moveHandler(movementCondition, predictedPosition);
    },
    
    moveHandler(condition, predictedPosition) {
        condition ? Snake.handleMovement(predictedPosition) : Game.over();
    }
};
