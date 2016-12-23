let KeyboardHelper = {
    onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // w
                document.dispatchEvent(new CustomEvent('keydown:topMoveTry'));
                break;
            case 65: // a
                document.dispatchEvent(new CustomEvent('keydown:leftMoveTry'));
    
                break;
            case 83: // s
                document.dispatchEvent(new CustomEvent('keydown:bottomMoveTry'));
    
                break;
            case 68: // d
                document.dispatchEvent(new CustomEvent('keydown:rightMoveTry'));
                break;
            default:
                console.log('keyCode not handled: ', event.keyCode);
        }
    },
    
    onGameActive: function (event) {
        if (event.keyCode === 13) // enter
            document.dispatchEvent(new CustomEvent('game:restart'));
    }
};
