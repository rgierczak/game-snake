const KEYS = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13
};

let KeyboardHelper = {
    onKeyDown(event) {
        let isGameOverPopup = document.getElementById('popup');
        isGameOverPopup ? KeyboardHelper.onGameOver(event) : KeyboardHelper.onGameActive(event);
    },
    
    onGameOver(event) {
        if (event.keyCode === KEYS.ENTER) {
            event.preventDefault();
            document.dispatchEvent(new CustomEvent('game:restart'));
        }
    },
    
    onGameActive(event) {
        switch (event.keyCode) {
            case KEYS.UP:
                event.preventDefault();
                document.dispatchEvent(new CustomEvent('keydown:moveUp'));
                break;
                
            case KEYS.LEFT:
                event.preventDefault();
                document.dispatchEvent(new CustomEvent('keydown:moveLeft'));
                break;
                
            case KEYS.DOWN:
                event.preventDefault();
                document.dispatchEvent(new CustomEvent('keydown:moveDown'));
                break;
                
            case KEYS.RIGHT:
                event.preventDefault();
                document.dispatchEvent(new CustomEvent('keydown:moveRight'));
                break;
                
            case KEYS.ENTER:
                event.preventDefault();
                document.dispatchEvent(new CustomEvent('game:start'));
                
            default:
                // No default action.
        }
    }
};
