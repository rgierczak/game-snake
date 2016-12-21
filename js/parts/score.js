class Score  extends Part {
    constructor() {
        super();
        this.points = 0;
        
        this.setupScore();
    }
    
    setupScore() {
        let $board = document.getElementById('snake-board');
        this.createPart('score');
        if ($board)
            this.renderAfter(this.$body, $board);
    }
    
    renderAfter($score, $board) {
        $board.parentNode.insertBefore($score, $board.nextElementSibling);
    }
    
    addPoint() {
        this.points += 1;
    }
    
    getPoints() {
        return this.points;
    }
}
