let Game = {
    setup() {
        console.log('setup Game');
        Board.init();
        Snake.init();
        // 3. Init Food;
        // 4. Init Score;
        //MovementHandler.start(DIRECTIONS.RIGHT);
    },
    
    over() {
        MovementHandler.stop();
        console.log('koniec gry');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Game.setup();
});
