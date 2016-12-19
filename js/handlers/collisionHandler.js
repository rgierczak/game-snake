let CollisionHandler = {
    compareProperty (positionObject, objectToCompare, property) {
        return (positionObject.position[property] === objectToCompare[property]);
    },
    
    compareObject(el, objectToCompare) {
        let isEqualX = this.compareProperty(el, objectToCompare, 'x');
        let isEqualY = this.compareProperty(el, objectToCompare, 'y');
        return isEqualX && isEqualY;
    },
    
    checkBoardCollision(snakeElementPosition, property, boardElement) {
        return (snakeElementPosition[property] >= 0 && snakeElementPosition[property] < boardElement);
    },
    
    checkSnakeCollision(snakeElements, objectToCompare) {
        let collisionResult = true;
        snakeElements.forEach((el) => {
            let comparisionResult = this.compareObject(el, objectToCompare);
            if (comparisionResult)
                collisionResult = false;
        });
        return collisionResult;
    }
};
