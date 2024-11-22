import { mainInputHasInvalidCaracters, tokenInputHasInvalidCaracters } from './validations.js';
import { getInputMain, getConsole } from "./utils.js";
import Automato from './automato.js';

let automato = new Automato().getInstance();

const mainInputKeypressHandler = (e) => {
    if (mainInputHasInvalidCaracters(e.key)) {
        e.preventDefault();
    }

    if (e.code !== 'Space') {
        return;
    }

    let inputMain = getInputMain();

    if (inputMain.trim().length > 0) {
        let allwords = inputMain.split(" ");

        let lastWord = allwords[allwords.length - 1];
        let console = getConsole();

        if (automato.reconhecer(lastWord)) {
            console.innerHTML += `<p class="console-item">${lastWord}: <span style="color: green;">Reconhecido</span></p>`;
            return;
        }

        console.innerHTML += `<p class="console-item">${lastWord}: <span style="color: red;">Não Reconhecido</span></p>`;
    }
}

const tokenInputKeypressHandler = (e) => {
    if (tokenInputHasInvalidCaracters(e.key)) {
        e.preventDefault();
    }
}

export { mainInputKeypressHandler, tokenInputKeypressHandler };