const BOARD_WIDTH = 900;
const BOARD_HEIGHT = 600;
const ELEMENT_SIZE = 30;

class Board extends Part {
    constructor () {
        super();
        this.elementsMesh = [];
        this.elementSize = ELEMENT_SIZE;
        this.width = BOARD_WIDTH;
        this.height = BOARD_HEIGHT;
        this.setupBoard();
    }
    
    getBoardMesh() {
        return this.elementsMesh;
    }
    
    getBoardSize() {
        return {
            x: this.elementSize,
            y: this.elementsMesh.length
        }
    };
    
    setupBoard() {
        this.createBoard();
        this.createBoardMesh();
    }
    
    setBoardAttributes() {
        this.$body.style.width = this.width + 'px';
        this.$body.style.height = this.height + 'px';
    };
    
    createBoard() {
        this.$body = this.createPart('div', 'snake-board');
        this.setBoardAttributes();
        this.render(this.$body, document.body);
    };
    
    createBoardMesh() {
        let horizontal = parseInt(this.width / this.elementSize);
        let vertical = parseInt(this.height / this.elementSize);
        this.createMeshElements(horizontal, vertical);
    };
    
    createHorizontalMeshElements(horizontal, i) {
        for (let j = 0; j < horizontal; j++)
            this.elementsMesh[i].push(this.buildMeshElement(i, j));
    };
    
    createMeshElements(horizontal, vertical) {
        for (let i = 0; i < vertical; i++) {
            this.elementsMesh[i] = [];
            this.createHorizontalMeshElements(horizontal, i);
        }
    };
    
    buildMeshElement(i, j) {
        return {
            x_pos: j * this.elementSize,
            y_pos: i * this.elementSize
        }
    }
}

