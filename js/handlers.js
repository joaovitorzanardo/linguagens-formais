import { mainInputHasInvalidCaracters, tokenInputHasInvalidCaracters } from './validations.js';
import { getInputMain, getConsole, cleanData } from "./utils.js";
import { saveToken } from './token-service.js';
import Automato from './automato.js';

let automato = new Automato().getInstance();

const mainInputKeypressHandler = (e) => {
    if (mainInputHasInvalidCaracters(e.key)) {
        e.preventDefault();
    }

    if (e.code !== 'Space' && e.code !== 'Enter') {
        automato.trocarEstado(e.key);
        return;
    }

    let inputMain = getInputMain();

    if (inputMain.trim().length > 0) {
        let allwords = inputMain.split(" ");

        let lastWord = allwords[allwords.length - 1];
        let console = getConsole();

        if (automato.reconhecer(lastWord)) {
            console.innerHTML = `<p class="console-item">${lastWord}: <span style="color: green;">Reconhecido</span></p>`;
        } else {
            console.innerHTML = `<p class="console-item">${lastWord}: <span style="color: red;">Não Reconhecido</span></p>`;
        }

        cleanData();
    }
}

const tokenInputKeypressHandler = (e) => {
    if (tokenInputHasInvalidCaracters(e.key)) {
        e.preventDefault();
    }

    if (e.code === 'Enter') {
        saveToken();
    }
}

export { mainInputKeypressHandler, tokenInputKeypressHandler };