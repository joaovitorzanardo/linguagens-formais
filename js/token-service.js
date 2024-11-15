import { save, remove, tokenAlreadyExists, findAll } from "./tokens-repository.js";
import { getInputToken, clearInputToken, isTokenEmpty } from "./utils.js";

let selectedLine;
let selectedToken = "";

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

    if (tokenAlreadyExists(token)) {
        alert("O token já está cadastrado!");
        return;
    }

    save(token);
    showAllTokens();
    clearInputToken();
}

const deleteToken = () => {
    if (isTokenEmpty(selectedToken)) {
        alert("Nenhum token foi selecionado!");
        return;
    }

    remove(selectedToken);
    showAllTokens();
}

const showAllTokens = () => {
    let tokens = findAll();
    let rows = "";

    let counter = 1;
    tokens.forEach((t) => {
        let row = `<tr onclick="selectToken(this)"><td>${counter}</td><td>${t}</td></tr>`

        rows += row;
        counter++;
    });

    let tableBody = document.getElementById("table-body");

    tableBody.innerHTML = rows;
}

export { saveToken, deleteToken, showAllTokens, selectToken };


