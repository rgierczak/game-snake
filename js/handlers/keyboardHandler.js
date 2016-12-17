let KeyboardHandler = {
    onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // w
                MovementHandler.move(DIRECTIONS.TOP);
                break;
            case 65: // a
                MovementHandler.move(DIRECTIONS.LEFT);
                break;
            case 83: // s
                MovementHandler.move(DIRECTIONS.BOTTOM);
                break;
            case 68: // d
                MovementHandler.move(DIRECTIONS.RIGHT);
                break;
            default:
                console.log('keyCode not handled: ', event.keyCode);
        }
    }
};
