const FOOD_ELEMENTS_NUMBER = 5;

let Food = {
    foodElements: [],
    $body: null,
    
    init() {
        this.setupFood();
    },
    
    setupFood() {
        this.setupFoodBody();
        this.createFoodElements();
        this.displayFood();
    },
    
    displayFood() {
        let $foodElements = this.foodElements;
        $foodElements.forEach(($element) => {
            this.displayFoodElement($element);
        })
    },
    
    displayFoodElement($element) {
        let $foodBody = this.$body;
        $foodBody.appendChild($element.$body);
    },
    
    createFoodElements() {
        for (let i = 0; i < FOOD_ELEMENTS_NUMBER; i++) {
            this.createFoodElement();
        }
    },
    
    createFoodElement() {
        let foodInstance = new FoodElement();
        this.foodElements.push(foodInstance);
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
        let arr = this.foodElements;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].position.x === element.position.x && arr[i].position.y === element.position.y)
                arr.splice(i, 1);
        }
    },
    
    remove(element) {
        this.removeFromDOM(element);
        this.removeFromArray(element);
    },
    
    foodEatenHandler(element) {
        this.remove(element);
        if (!this.foodElements.length)
            Game.over();
    },
};
