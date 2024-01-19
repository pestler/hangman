import Element from "../../utils/element";
import hangman from './hangman/hangman';
import board from './board/board';
import Keyboard from "../../keyboard/keyboard";


const main = new Element({
    parentNode: document.body,
    className: 'main',
    tag: 'main',
})


main.append(hangman.node);
main.append(board.node);




export default main


