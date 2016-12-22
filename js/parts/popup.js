class Popup extends Part{
    constructor(message) {
        super();
        this.message = message;

        this.setupPopup();
    }
    
    setupPopup() {
        this.createPopup();
    }
    
    displayPopup() {
        let $score = document.getElementById('score');
        if ($score)
            this.renderAfter(this.$body, $score);
    }
    
    createPopup() {
        this.createPart('popup');
        this.renderMessage(this.message);
    }
}
