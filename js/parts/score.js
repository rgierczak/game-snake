class Score  extends Part {
    constructor() {
        super();
        this.points = 0;
        this.message = null;
        
        this.setupScore();
    }
    
    setupScore() {
        this.composeMessage();
        this.displayScoreBoard();
        this.renderMessage(this.message);
    }
    
    displayScoreBoard() {
        let $board = document.getElementById('snake-board');
        this.createPart('score');
        if ($board)
            this.renderAfter(this.$body, $board);
    }
    
    updatePoints(points) {
        this.addPoints(points);
        this.composeMessage();
        this.renderMessage(this.message);
    }
    
    composeMessage() {
        this.message = 'Score: ' + this.points;
    }
    
    addPoints(points) {
        this.points += points;
    }
    
    getPoints() {
        return this.points;
    }
}
