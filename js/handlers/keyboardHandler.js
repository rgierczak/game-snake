let KeyboardHandler = {
    onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // w
                this.handleMove(DIRECTIONS.TOP);
                break;
            case 65: // a
                this.handleMove(DIRECTIONS.LEFT);
                break;
            case 83: // s
                this.handleMove(DIRECTIONS.BOTTOM);
                break;
            case 68: // d
                this.handleMove(DIRECTIONS.RIGHT);
                break;
            default:
                console.log('keyCode not handled: ', event.keyCode);
        }
    },
    
    handleMove(direction) {
        let isMovePossible = Snake.isMovePossible(direction);
        if (isMovePossible)
            MovementHandler.move(direction);
    }
};
