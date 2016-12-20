function compareProperty(positionObject, objectToCompare, property) {
    return (positionObject.position[property] === objectToCompare[property]);
}

let CollisionHandler = {
    compareObject(el, objectToCompare) {
        let isEqualX = compareProperty(el, objectToCompare, 'x');
        let isEqualY = compareProperty(el, objectToCompare, 'y');
        return isEqualX && isEqualY;
    },
    
    checkSnakeCollision(direction) {
        Snake.snakeElements.forEach((el) => {
            let comparisionResult = CollisionHandler.compareObject(el, direction);
            if (comparisionResult)
                console.log('snake collision');
        });
    }
};

document.addEventListener('board:collision', () => {
    Game.over();
});