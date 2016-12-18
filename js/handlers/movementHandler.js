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
        MovementHandler.moveSnakeHandler(movementCondition, predictedPosition);
    },
    
    moveBottom() {
        let predictedPosition = Snake.setPredictedPositionForBottom();
        let movementCondition = CollisionHandler.checkVerticalMove(predictedPosition);
        MovementHandler.moveSnakeHandler(movementCondition, predictedPosition);
    },
    
    moveLeft() {
        let predictedPosition = Snake.setPredictedPositionForLeft();
        let movementCondition = CollisionHandler.checkHorizontalMove(predictedPosition);
        MovementHandler.moveSnakeHandler(movementCondition, predictedPosition);
    },
    
    moveRight() {
        let predictedPosition = Snake.setPredictedPositionForRight();
        let movementCondition = CollisionHandler.checkHorizontalMove(predictedPosition);
        MovementHandler.moveSnakeHandler(movementCondition, predictedPosition);
    },
    
    moveSnakeHandler: function (condition, predictedPosition) {
        if (condition) {
            Snake.checkFood();
            Snake.addSnakeHead(predictedPosition);
        } else {
            Game.over();
        }
    },
};
