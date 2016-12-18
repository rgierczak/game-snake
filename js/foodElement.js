class FoodElement {
    constructor() {
        this.$body = null;
        this.position = {
            x: 0,
            y: 0
        };
        
        this.init();
    }
    
    init() {
        this.createFoodElement();
        this.setFoodElementPosition();
    }
    
    createFoodElement() {
        let $element = document.createElement('div');
        $element.setAttribute('class', 'food-element');
        this.$body = $element;
    }
    
    setFoodElementPosition() {
        let position = this.position;
        position.x = Math.floor(Math.random() * Board.elementSize);
        position.y = Math.floor(Math.random() * Board.elementsMesh.length);
    
        let leftDistance = Board.elementsMesh[position.y][position.x].x_pos;
        let topDistance = Board.elementsMesh[position.y][position.y].y_pos;
        this.setFoodElementDistance(leftDistance, topDistance);
    }
    
    setFoodElementDistance(leftDistance, topDistance) {
        this.$body.style.left = leftDistance + "px";
        this.$body.style.top = topDistance + "px";
    }
}
