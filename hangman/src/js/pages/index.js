console.log('hello');
import header from './header/header';
import main from './main/main';


export default class Page {
    constructor() {
        this.node = document.body;
        this.node.classList.add('box');        
    }

    init() {
        this.header = header;
        this.main = main;           
    }
}
