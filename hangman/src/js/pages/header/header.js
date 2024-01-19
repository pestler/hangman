import Element from "../../utils/element";
import node from './header.html';

const header = new Element({
    parentNode: document.body,
    className: 'header',
    tag: 'header',    
    content: node,
})

const startButton = new Element({    
    className: 'start-game',
    tag: 'button',        
})

const startText = new Element({    
    tag: 'h1',    
    content: 'Start of the game',
})

startButton.append( startText.node)
header.append( startButton.node)

export default header

