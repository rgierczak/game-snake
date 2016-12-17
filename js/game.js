let Game = {
    setup() {
        Board.init();
        Snake.init();
        // 3. Init Food;
        // 4. Init Score;
        console.log('setup Game');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Game.setup();
});
