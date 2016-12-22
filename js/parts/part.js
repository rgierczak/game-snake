class Part {
    constructor() {
        this.$body = null;
    }
    
    render($child, $node = this.$body) {
        $node.appendChild($child);
    }
    
    renderAfter($score, $board) {
        $board.parentNode.insertBefore($score, $board.nextElementSibling);
    }
    
    renderMessage(message) {
        this.$body.innerText = message;
    }
    
    createPart(id) {
        this.$body = document.createElement('div');
        this.$body.setAttribute('id', id);
    }
}
