class Part {
    constructor() {
        this.$body = null;
    }
    
    render($child, $node = this.$body) {
        $node.appendChild($child);
    }
    
    createPart(id) {
        this.$body = document.createElement('div');
        this.$body.setAttribute('id', id);
    }
}
