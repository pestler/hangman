import './hangman.scss'
import Element from "../../../utils/element";
import node from './hangman.html';

const hangman = new Element({   
    tag: 'div',
    className:'hangman',     
    content: node,
})

export default hangman





