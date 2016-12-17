let Board = {
    width: 0,
    height: 0,
    elementSize: 30,
    elementsMesh: [],
    $DOMRepresentation: null,
    
    init (width, height) {
        this.width = width;
        this.height = height;
        this.$DOMRepresentation = this.createBoard();
        this.elementsMesh = this.createBoardMesh();
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
        return $board;
    },
    
    createBoardMesh() {
        let horizontal = parseInt(this.width / this.elementSize);
        let vertical = parseInt(this.height / this.elementSize);
        this.createMeshElements(horizontal, vertical);
    },
    
    buildHorizontal: function (horizontal, i) {
        for (let j = 0; j < horizontal; j++)
            this.elementsMesh[i].push(this.buildMeshElement(i, j));
    },
    
    createMeshElements(horizontal, vertical) {
        for (let i = 0; i < vertical; i++) {
            this.elementsMesh[i] = [];
            this.buildHorizontal(horizontal, i);
        }
    },
    
    buildMeshElement(i, j) {
        return {
            x_pos: j * this.elementSize,
            y_pos: i * this.elementSize
        }
    }
};
