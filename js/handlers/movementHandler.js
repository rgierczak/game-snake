const SNAKE_MOVEMENT_SPEED = 40;

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
        let movementCondition = CollisionHandler.checkVerticalMove(predictedPosition);
        MovementHandler.moveHandler(movementCondition, predictedPosition);
    },
    
    moveBottom() {
        let predictedPosition = Snake.setPredictedPositionForBottom();
        let movementCondition = CollisionHandler.checkVerticalMove(predictedPosition);
        MovementHandler.moveHandler(movementCondition, predictedPosition);
    },
    
    moveLeft() {
        let predictedPosition = Snake.setPredictedPositionForLeft();
        let movementCondition = CollisionHandler.checkHorizontalMove(predictedPosition);
        MovementHandler.moveHandler(movementCondition, predictedPosition);
    },
    
    moveRight() {
        let predictedPosition = Snake.setPredictedPositionForRight();
        let movementCondition = CollisionHandler.checkHorizontalMove(predictedPosition);
        MovementHandler.moveHandler(movementCondition, predictedPosition);
    },
    
    moveHandler(condition, predictedPosition) {
        condition ? Snake.handleMovement(predictedPosition) : Game.over();
    },
};
