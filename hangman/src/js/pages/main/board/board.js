import "./board.scss"
import Element from "../../../utils/element";
import words from "./../../../keyboard/words"
import header from "../../header/header";
import Keyboard from "../../../keyboard/keyboard";

let sorWords = null
let getRandomWords = null
let answerWord = null
let answerLetterLength = null
let getHintContent = null
let letterRandom = null
let letterArray = null

sorWords = (el) => el.slice().sort(() => Math.random() - 0.5);
getRandomWords = sorWords(words)[0].word.toLowerCase()
getHintContent = sorWords(words)[0].hint
console.log('включите английскую клавиатуру!!! ответ на вопрос = ', getRandomWords)
answerWord = getRandomWords
answerLetterLength = answerWord.length
letterRandom = getRandomWords.split('')
letterArray = []

for (let i = 0; i < letterRandom.length; i += 1) {
    letterArray[i] = '_'
}


export let incorrect = 0
let guesses = `Incorrect guesses: ${incorrect} / 6`

const board = new Element({
    tag: 'div',
    className: 'board',
})

const Letter = new Element({
    tag: 'div',
    className: 'letter',
    content: `${letterArray.join(' ')}`,
})

const Hint = new Element({
    tag: 'div',
    className: 'hint',
    content: `${getHintContent}`,
})

const Quesses = new Element({
    tag: 'div',
    className: 'correct',
    content: `${guesses}`,
})


board.append(Letter.node, Hint.node, Quesses.node,)

const keyboard = new Keyboard(board);
keyboard.init();
keyboard.node.addEventListener('click', e => compare(e.target.innerHTML))
keyboard.node.addEventListener('keydown', e => console.log(e.target.innerHTML))


function compare(key) {
    if (key) {
        for (var j = 0; j < letterArray.length; j++) {
            if (letterRandom[j] === key) {
                letterArray[j] = key;
            }
            Letter.node.innerHTML = letterArray.join('')
        }
    } else {
        answerLetterLength--
        console.log(answerLetterLength);
        incorrect++
        console.log(incorrect)
        Quesses.node.innerHTML = guesses
    }

}



header.node.addEventListener('click', () => {
    //getRandomWords()
    sorWords(words)
    Letter.node.innerText = letterArray
    Hint.node.innerText = getHintContent
})


export default board






