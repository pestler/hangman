import Element from "../utils/element";
import keys from "./keys";
export default class Keyboard extends Element {
    constructor(parentNode) {
        super({
            parentNode,
            className: 'keyboard',
        })
    }
    init() {
        this.createKeys(keys)
        this.addListeners()
    }

    createKeys(keys) {
        keys.forEach((el) => {
            const button = document.createElement('button')
            button.classList.add("keyboard-key");
            button.textContent = el
            document.addEventListener('keydown', (e) => {
                e.key === el && this.pressKeys(button)
            })
            this.node.append(button)
        })
    }

    addListeners() {
        this.node.addEventListener('click', (e) => this.pressKeys(e.target))
        //document.addEventListener('keydown', (e) =>  this.pressKeyboard(String.fromCharCode(e.keyCode).toLowerCase())) 
    }

    pressKeys(key) {
        key.classList.add('active')
    }

}