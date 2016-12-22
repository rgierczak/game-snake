class Popup extends Part{
    constructor(message) {
        super();
        this.message = message;
        this.$popupButton = null;
        this.$popupMessage = null;

        this.setupPopup();
        this.setupListeners();
    }
    
    setupPopup() {
        this.createPopup();
    }
    
    setupListeners() {
        this.$popupButton.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('game:restart'));
        });
    }
    
    displayPopup() {
        let $score = document.getElementById('score');
        if ($score)
            this.renderAfter(this.$body, $score);
    }
    
    createPopup() {
        this.$body = this.createPart('div', 'popup');
        this.createPopupMessage();
        this.createPopupButton();
    }
    
    createPopupMessage() {
        this.$popupMessage = this.createPart('p', 'popup-message');
        this.renderMessage(this.message, this.$popupMessage);
        this.render(this.$popupMessage, this.$body);
    }
    
    createPopupButton() {
        this.$popupButton = this.createPart('div', 'popup-button');
        this.renderMessage('OK', this.$popupButton);
        this.render(this.$popupButton, this.$body);
    }
}
