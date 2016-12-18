let CollisionHandler = {
    compare (positionObject, objectToCompare, property) {
        return (positionObject.position[property] === objectToCompare[property]);
    },
    
    checkBoardCollision(snakeElementPosition, property, boardElement) {
        return (snakeElementPosition[property] >= 0 && snakeElementPosition[property] < boardElement);
    },
    
    compareBothCoordinates: function (el, objectToCompare) {
        let isEqualX = CollisionHandler.compare(el, objectToCompare, 'x');
        let isEqualY = CollisionHandler.compare(el, objectToCompare, 'y');
        return isEqualX && isEqualY;
    },
    
    checkSnakeCollision(snakeElements, objectToCompare) {
        let collisionResult = true;
        snakeElements.forEach((el) => {
            let comparisionResult = this.compareBothCoordinates(el, objectToCompare);
            if (comparisionResult)
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
