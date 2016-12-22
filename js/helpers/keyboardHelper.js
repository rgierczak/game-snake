let KeyboardHelper = {
    onPopupActive(event) {
        switch (event.keyCode) {
            case 87: // w
                MovementHelper.handle('moveTop');
                break;
            case 65: // a
                MovementHelper.handle('moveLeft');
                break;
            case 83: // s
                MovementHelper.handle('moveBottom');
                break;
            case 68: // d
                MovementHelper.handle('moveRight');
                break;
            default:
                console.log('keyCode not handled: ', event.keyCode);
        }
    },
    
    onGameActive: function (event) {
        if (event.keyCode === 13) // enter
            document.dispatchEvent(new CustomEvent('game:restart'));
        
    },
    
    onKeyDown(event) {
        let isPopupActive = document.getElementById('popup');
        if (isPopupActive)
            this.onGameActive(event);
        else
            this.onPopupActive(event);
    }
};
