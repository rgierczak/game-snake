class Score  extends Part {
    constructor() {
        super();
        this.points = 0;
        
        this.setupScore();
    }
    
    setupScore() {
        this.displayScoreBoard();
        this.renderMessage('Points: ' + this.points);
    }
    
    displayScoreBoard() {
        let $board = document.getElementById('snake-board');
        this.$body = this.createPart('div', 'score');
        if ($board)
            this.renderAfter(this.$body, $board);
    }
    
    updatePoints(points) {
        this.addPoints(points);
        this.renderMessage('Points: ' + this.points);
    }
    
    addPoints(points) {
        this.points += points;
    }
    
    getPoints() {
        return this.points;
    }
}
