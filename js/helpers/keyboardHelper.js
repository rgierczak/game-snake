let KeyboardHelper = {
    onKeyDown(event) {
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
    }
};
