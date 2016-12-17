let MovementHandler = {
    start (direction){
        Snake.snakeElement.move(direction);
    },
    
    stop() {
        
    },
    
    move(direction){
        this.stop();
        this.start(direction);
    }
};
