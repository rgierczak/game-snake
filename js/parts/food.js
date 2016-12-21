const FOOD_ELEMENTS_NUMBER = 1200;

function isFoodEaten(food, element) {
    return parseInt(food.style.top) === element.top && parseInt(food.style.left) === element.left;
}

function removeEatenFood(foodList, element) {
    foodList.forEach((food) => {
        if (isFoodEaten(food, element))
            food.remove();
    });
}

function removeFromDOM(element) {
    let $food = document.getElementById('food');
    let foodList = Array.from($food.children);
    removeEatenFood(foodList, element);
}

class Food extends Part {
    constructor(board, snake) {
        super();
        this.foodElements = [];
        this.board = board;
        this.snake = snake;
        this.setupFoodBody();
        this.createFoodElements();
        this.displayFood();
    }
    
    displayFood() {
        this.foodElements.forEach(($element) => {
            this.render($element.$body);
        })
    }
    
    createFoodElements() {
        for (let i = 0; i < FOOD_ELEMENTS_NUMBER; i++)
            this.foodElements.push(new FoodElement(this.board));
    }
    
    setupFoodBody() {
        let $board = document.getElementById('snake-board');
        this.createPart('food');
        if ($board)
            this.render(this.$body, $board);
    }
    
    removeFromArray(element) {
        let elements = this.foodElements;
        for (let i = 0; i < elements.length; i++) {
            if (Utils.positionCompare(elements[i], element))
                elements.splice(i, 1);
        }
    }
    
    removeFoodElement(element) {
        removeFromDOM(element);
        this.removeFromArray(element);
    }
    
    foodEatenHandler(element, position) {
        this.snake.addSnakeHead(position);
        this.removeFoodElement(element);
        if (!this.foodElements.length)
            document.dispatchEvent(new CustomEvent('game:over'));
    }
    
    checkFoodHandler(element, predictedPosition) {
        let isFoodFound = Utils.compare(element, this.snake.snakeHeadPosition);
        if (isFoodFound)
            this.foodEatenHandler(element, predictedPosition);
    }
    
    checkFood(predictedPosition) {
        this.foodElements.forEach((element) => {
            this.checkFoodHandler(element, predictedPosition);
        });
    }
}
