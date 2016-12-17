let Game = {
    setup() {
        console.log('setup Game');
        Board.init();
        Snake.init();
        // 3. Init Food;
        // 4. Init Score;
        //MovementHandler.start(DIRECTIONS.RIGHT);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Game.setup();
});
