class FoodElement {
    constructor(boardSize, boardMesh) {
        this.$body = null;
        this.position = {
            x: 0,
            y: 0
        };
        this.left = null;
        this.top = null;
        this.boardSize = boardSize;
        this.boardMesh = boardMesh;
        
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
        position.x = Math.floor(Math.random() * this.boardSize.x);
        position.y = Math.floor(Math.random() * this.boardSize.y);
    
        this.left = this.boardMesh[this.position.y][this.position.x].x_pos;
        this.top = this.boardMesh[this.position.y][this.position.y].y_pos;
        this.setFoodElementDistance();
    }
    
    setFoodElementDistance() {
        this.$body.style.left = this.left + "px";
        this.$body.style.top = this.top + "px";
    }
}
