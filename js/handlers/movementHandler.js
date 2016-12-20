const SNAKE_MOVEMENT_SPEED = 40;

let MovementHandler = {
    stop() {
        clearInterval(this.clock);
    },
    
    handle(method) {
        this.stop();
        this.clock = setInterval(
            () => Snake[method](),
            SNAKE_MOVEMENT_SPEED);
    }
};
