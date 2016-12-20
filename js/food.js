const FOOD_ELEMENTS_NUMBER = 5;

let Food = {
    foodElements: [],
    $body: null,
    
    init() {
        this.setupFoodBody();
        this.createFoodElements();
        this.displayFood();
    },
    
    displayFood() {
        this.foodElements.forEach(($element) => {
            this.$body.appendChild($element.$body);
        })
    },

    createFoodElements() {
        for (let i = 0; i < FOOD_ELEMENTS_NUMBER; i++) {
            this.foodElements.push(new FoodElement());
        }
    },
    
    setupFoodBody() {
        let $board = document.getElementById('snake-board');
        this.$body = this.createFoodBody();
        if ($board)
            $board.appendChild(this.$body);
    },
    
    createFoodBody () {
        let $food = document.createElement('div');
        $food.setAttribute('id', 'food');
        return $food;
    },
    
    removeFromDOM(element) {
        let list = document.getElementById('food');
        
        for (let i = 0; i < list.childElementCount; i++) {
            if (parseInt(list.childNodes[i].style.top) === element.top &&
                parseInt(list.childNodes[i].style.left) === element.left) {
                list.removeChild(list.childNodes[i]);
            }
        }
    },
    
    removeFromArray(element) {
        let elements = this.foodElements;
        for (let i = 0; i < elements.length; i++) {
            if (Helper.positionCompare(elements[i], element))
                elements.splice(i, 1);
        }
    },
    
    removeFoodElement(element) {
        this.removeFromDOM(element);
        this.removeFromArray(element);
    },
    
    foodEatenHandler(element, position) {
        Snake.addSnakeHead(position);
        this.removeFoodElement(element);
        if (!this.foodElements.length)
            Game.over();
    },
    
    checkFoodHandler(element, predictedPosition) {
        let isFoodFound = Helper.compare(element, Snake.snakeHeadPosition);
        if (isFoodFound)
            this.foodEatenHandler(element, predictedPosition);
    },
    
    checkFood(predictedPosition) {
        this.foodElements.forEach((element) => {
            this.checkFoodHandler(element, predictedPosition);
        });
    },
};
