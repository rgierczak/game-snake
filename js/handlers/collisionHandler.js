let CollisionHandler = {
    compare (el, predictedPosition, property) {
        return (el.position[property] === predictedPosition[property]);
    },
    
    checkBoardCollision(snakeElementPosition, property, boardElement) {
        return (snakeElementPosition[property] >= 0 && snakeElementPosition[property] < boardElement);
    },
    
    checkSnakeCollision(snakeElements, predictedPosition) {
        let collisionResult = true;
        snakeElements.forEach((el) => {
            let isEqualX = CollisionHandler.compare(el, predictedPosition, 'x');
            let isEqualY = CollisionHandler.compare(el, predictedPosition, 'y');
            if (isEqualX && isEqualY)
                collisionResult = false;
        });
        return collisionResult;
    },
    
    checkHorizontalMove(predictedPosition) {
        let isSnakeCollision = CollisionHandler.checkSnakeCollision(Snake.snakeElements, predictedPosition);
        let isBoardCollision = CollisionHandler.checkBoardCollision(predictedPosition, 'x', Board.elementSize);
        return isBoardCollision && isSnakeCollision;
    },
    
    checkVerticalMove(predictedPosition) {
        let isSnakeCollision = CollisionHandler.checkSnakeCollision(Snake.snakeElements, predictedPosition);
        let isBoardCollision = CollisionHandler.checkBoardCollision(predictedPosition, 'y',  Board.elementsMesh.length);
        return isBoardCollision && isSnakeCollision;
    }
};
