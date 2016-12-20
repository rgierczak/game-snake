class Element {
    constructor() {
        this.left = null;
        this.top = null;
        this.$body = null;
        this.board = null;
        this.position = {
            x: 0,
            y: 0
        };
    }
    
    createElement(className) {
        let $element = document.createElement('div');
        $element.setAttribute('class', className);
        this.$body = $element;
    }
    
    setElementStylePosition() {
        this.$body.style.left = this.left + "px";
        this.$body.style.top = this.top + "px";
    }
    
    setPositionCoordinates() {
        let boardMesh = this.board.getBoardMesh();
        this.left = boardMesh[this.position.y][this.position.x].x_pos;
        this.top = boardMesh[this.position.y][this.position.x].y_pos;
    }
    
    setElementDistance() {
        this.setPositionCoordinates();
        this.setElementStylePosition();
    }
}
