const BOARD_WIDTH = 900;
const BOARD_HEIGHT = 600;

let Board = {
    width: 0,
    height: 0,
    elementSize: 30,
    elementsMesh: [],
    
    init () {
        this.width = BOARD_WIDTH;
        this.height = BOARD_HEIGHT;
        this.createBoard();
        this.createBoardMesh();
    },
    
    setBoardAttributes($board) {
        $board.setAttribute('id', 'snake-board');
        $board.style.width = this.width + 'px';
        $board.style.height = this.height + 'px';
    },
    
    createBoard() {
        let $board = document.createElement('div');
        this.setBoardAttributes($board);
        document.body.appendChild($board);
    },
    
    createBoardMesh() {
        let horizontal = parseInt(this.width / this.elementSize);
        let vertical = parseInt(this.height / this.elementSize);
        this.createMeshElements(horizontal, vertical);
    },
    
    createHorizontalMeshElements(horizontal, i) {
        for (let j = 0; j < horizontal; j++)
            this.elementsMesh[i].push(this.buildMeshElement(i, j));
    },
    
    createMeshElements(horizontal, vertical) {
        for (let i = 0; i < vertical; i++) {
            this.elementsMesh[i] = [];
            this.createHorizontalMeshElements(horizontal, i);
        }
    },
    
    getBoardSize(axis) {
        switch (axis) {
            case 'x':
                return this.elementSize;
            case 'y':
                return this.elementsMesh.length;
        }
    },
    
    buildMeshElement(i, j) {
        return {
            x_pos: j * this.elementSize,
            y_pos: i * this.elementSize
        }
    }
};
