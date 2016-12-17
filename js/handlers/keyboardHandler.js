let KeyboardHandler = {
    onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // w
                MovementHandler.handle('moveTop');
                break;
            case 65: // a
                MovementHandler.handle('moveLeft');
                break;
            case 83: // s
                MovementHandler.handle('moveBottom');
                break;
            case 68: // d
                MovementHandler.handle('moveRight');
                break;
            default:
                console.log('keyCode not handled: ', event.keyCode);
        }
    }
};
