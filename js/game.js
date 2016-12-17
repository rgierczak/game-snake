let Game = {
    setup() {
        Board.init(900, 600);
        Snake.init();
        // 3. Init Food;
        // 4. Init Score;
        console.log('setup Game');
    }
};

Game.setup();
