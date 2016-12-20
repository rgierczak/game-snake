class FoodElement extends GameElement {
    constructor(board) {
        super();
        this.board = board;
        this.init();
    }
    
    init() {
        this.createElement('food-element');
        this.setFoodElementPosition();
        this.setElementDistance();
    }
    
    setFoodElementPosition() {
        let boardSize = this.board.getBoardSize();
        let x = Math.floor(Math.random() * boardSize.x);
        let y = Math.floor(Math.random() * boardSize.y);
        this.position = { x, y };
    }
}
