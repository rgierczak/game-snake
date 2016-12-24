class Score extends Part {
    constructor() {
        super();
        this.points = 0;
        this.$scoreButton = null;
        this.$scoreMessage = null;
        
        this.setupScore();
        this.setupHandlers();
    }
    
    setupScore() {
        this.displayScoreBoard();
        this.renderPopupMessage();
    }
    
    setupHandlers() {
        this.$scoreButton.addEventListener('click', () => this.scoreButtonHandler());
    }
    
    scoreButtonHandler() {
        document.dispatchEvent(new CustomEvent('game:start'));
    }
    
    renderPopupMessage() {
        let $container = this.$scoreMessage;
        let message = 'Points: ' + this.points;
        this.renderMessage(message, $container);
    }
    
    displayScoreBoard() {
        let $board = document.getElementById('snake-board');
        this.$body = this.createPart('div', 'score');
        this.createScoreMessage();
        this.createScoreButton();
        if ($board)
            this.renderAfter(this.$body, $board);
    }
    
    createScoreButton() {
        this.$scoreButton = this.createPart('div', 'score-button');
        this.renderMessage('OK', this.$scoreButton);
        this.render(this.$scoreButton, this.$body);
    }
    
    createScoreMessage() {
        this.$scoreMessage = this.createPart('p', 'score-message');
        this.render(this.$scoreMessage, this.$body);
    }
    
    updatePoints(points) {
        this.addPoints(points);
        this.renderPopupMessage();
    }
    
    addPoints(points) {
        this.points += points;
    }
    
    getPoints() {
        return this.points;
    }
}
