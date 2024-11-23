import Automato from './automato.js';

let automato = new Automato().getInstance();

const getInputToken = () => {
    return document.getElementById("input-token").value;
}

const getInputMain = () => {
    return document.getElementById("input-main").value;
}

const getConsole = () => {
    return document.getElementById("console");
}

const clearInputToken = () => {
    document.getElementById("input-token").value = "";
}

const clearConsole = () => {
    getConsole().innerHTML = "";
    document.getElementById("input-main").value = "";
    cleanData();
}

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

const renderStateTableHead = () => {
    let stateTableHeadRow = document.getElementById('head-row');

    alphabet.forEach((letter) => {
        stateTableHeadRow.innerHTML += `<th>${letter}</th>`;
    });
}

function gerarPalavraAleatoria() {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'; // Alfabeto com letras minúsculas
    let palavra = '';
    let tamanho = Math.random() * (10 - 2) + 2;

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
        palavra += alfabeto[indiceAleatorio];
    }

    document.getElementById("input-token").value = palavra;
}

const getTableDataForRow = (state, letters) => {
    let tableData = '';

    for (let l of alphabet) {
        let found = false;

        for (const [letter, nextState] of Object.entries(letters)) {
            if (l === letter) {
                tableData += `<td id="${state}${letter}">${nextState}</td>`;
                found = true;
                break;
            }
        }

        if (found) {
            continue;
        }

        tableData += '<td>-</td>';
    }

    return tableData;
}

const renderStateTableBody = () => {
    let stateTableBody = document.getElementById('state-table-body');

    let states = automato.getStates();
    console.log(states);

    stateTableBody.innerHTML = '';
    for (const [state, letters] of Object.entries(states)) {
        let data = getTableDataForRow(state, letters);

        stateTableBody.innerHTML += `<tr id="${state}"><td>${state}</td>${data}</tr>`;
    }
}

const cleanData = () => {
    let founds = document.getElementsByClassName('found');

    let i = 0;
    while (founds.length > 0) {
        founds[i].classList.remove('found');
    }

    automato.resetCurrentState();
    document.getElementById("input-main").value = ""
}

export { gerarPalavraAleatoria, cleanData, getInputToken, getInputMain, getConsole, clearInputToken, clearConsole, renderStateTableHead, renderStateTableBody };