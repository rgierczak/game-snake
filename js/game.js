let Game = {
    setup() {
        console.log('setup Game');
        Board.init();
        Snake.init();
        Food.init();
        // 4. Init Score;
        //MovementHandler.handle('moveRight');
    },
    
    over() {
        MovementHandler.stop();
        console.log('Game Over');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Game.setup();
});

document.addEventListener('collision', () => {
    Game.over();
});