const SNAKE_MOVEMENT_SPEED = 40;

let MovementHandler = {
    start (direction){
        this.clock = setInterval(
            () => Snake.move(direction), 
        SNAKE_MOVEMENT_SPEED);
    },
    
    stop() {
        clearInterval(this.clock);
    },
    
    move(direction){
        this.stop();
        this.start(direction);
    }
};
