class FoodElement {
    constructor() {
        this.$body = null;
        this.position = {
            x: 0,
            y: 0
        };
        this.left = null;
        this.top = null;
        
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
    
        this.left = Board.elementsMesh[position.y][position.x].x_pos;
        this.top = Board.elementsMesh[position.y][position.y].y_pos;
        this.setFoodElementDistance();
    }
    
    setFoodElementDistance() {
        this.$body.style.left = this.left + "px";
        this.$body.style.top = this.top + "px";
    }
}
