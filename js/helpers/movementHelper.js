const SNAKE_MOVEMENT_SPEED = 100;

function sendMoveEvent(method) {
    document.dispatchEvent(new CustomEvent('snake:move', {
        detail: method
    }));
}

let MovementHelper = {
    stop() {
        clearInterval(this.clock);
    },
    
    handle(method) {
        this.stop();
        this.clock = setInterval(() => sendMoveEvent(method), SNAKE_MOVEMENT_SPEED);
    }
};
