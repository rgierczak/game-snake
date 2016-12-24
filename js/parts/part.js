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
    
    renderMessage(message, $element) {
        $element.innerText = message;
    }
    
    createPart(elementType, id) {
        let $element = document.createElement(elementType);
        $element.setAttribute('id', id);
        return $element;
    }
}
