const FOOD_ELEMENTS_NUMBER = 20;

let Food = {
    foodElement: {},
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
        if($board)
            $board.appendChild(this.$body);
    },
    
    createFoodBody () {
        let $food = document.createElement('div');
        $food.setAttribute('id', 'food');
        return $food;
    }
};
