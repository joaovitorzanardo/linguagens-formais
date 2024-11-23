import { save, remove, tokenAlreadyExists, findAll } from "./tokens-repository.js";
import { getInputToken, clearInputToken, renderStateTableHead, renderStateTableBody } from "./utils.js";
import { isTokenEmpty, tokenInputHasInvalidCaracters } from "./validations.js";
import Automato from './automato.js';

let selectedLine;
let selectedToken = "";

let automato = new Automato().getInstance();

const selectToken = (e) => {
    let tds = e.getElementsByTagName('td');

    if (selectedToken === tds[1].innerHTML) {
        e.classList.remove("selected");

        selectedToken = "";
        selectedLine = null;
        return;
    }

    e.classList.add("selected");
    if (selectedLine != null) {
        selectedLine.classList.remove("selected");
    }

    selectedLine = e;
    selectedToken = tds[1].innerHTML;
}

const saveToken = () => {
    const token = getInputToken();

    if (isTokenEmpty(token)) {
        alert("O token não pode ser vazio!");
        return;
    }

    if (tokenInputHasInvalidCaracters(token)) {
        alert("O token tem caracteres inválidos!");
        return;
    }

    if (tokenAlreadyExists(token)) {
        alert("O token já está cadastrado!");
        return;
    }

    save(token);
    showAllTokens();
    renderStateTableBody();
    clearInputToken();
}

const deleteToken = () => {
    if (isTokenEmpty(selectedToken)) {
        alert("Nenhum token foi selecionado!");
        return;
    }

    remove(selectedToken);
    showAllTokens();
    renderStateTableBody();
}

const initialize = () => {
    showAllTokens();
    renderStateTableHead();
    renderStateTableBody();
}

const showAllTokens = () => {
    let tokens = findAll();
    let rows = "";

    let counter = 1;

    automato.reset();
    tokens.forEach((t) => {
        automato.adicionarPalavra(t);
        let row = `<tr onclick="selectToken(this)"><td>${counter}</td><td>${t}</td></tr>`;

        rows += row;
        counter++;
    });

    let tableBody = document.getElementById("table-body");

    tableBody.innerHTML = rows;
}

export { saveToken, deleteToken, selectToken, initialize };


