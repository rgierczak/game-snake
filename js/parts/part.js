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
    
    renderMessage(message, $element = this.$body) {
        $element.innerText = message;
    }
    
    createPart(elementType, id, $element = this.$body) {
        $element = document.createElement(elementType);
        $element.setAttribute('id', id);
        return $element;
    }
}
