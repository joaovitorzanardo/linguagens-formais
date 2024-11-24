let instance = null;
let estados = {};
let estadoInicial = 'q0';
let estadoAtual = estadoInicial;
let estadosFinais = new Set();
let palavrasCadastradas = new Set();
let proximoEstado = 1;

export default class Automato {
    constructor() {
        if (instance === null) {
            instance = this;
        }
    }

    getInstance() {
        return this;
    }

    getStates() {
        return estados;
    }

    adicionarPalavra(palavra) {
        let estadoAtual = estadoInicial;

        for (let i = 0; i < palavra.length; i++) {
            const letra = palavra[i];

            if (!estados[estadoAtual]) {
                estados[estadoAtual] = {};
            }

            if (!estados[estadoAtual][letra]) {
                const novoEstado = 'q' + proximoEstado++;
                estados[estadoAtual][letra] = novoEstado;
            }

            estadoAtual = estados[estadoAtual][letra];
        }

        estadosFinais.add(estadoAtual);
        palavrasCadastradas.add(palavra);
        estadoAtual = estadoInicial;
    }

    reconhecer(palavra) {
        if (estadoAtual === null) {
            return false;
        }

        return estadosFinais.has(estadoAtual);
    }

    trocarEstado(letra) {
        if (estadoAtual === null) {
            return;
        }

        if (estados[estadoAtual] && estados[estadoAtual][letra]) {
            let tableData = document.getElementById(`${estadoAtual}${letra}`);
            estadoAtual = estados[estadoAtual][letra];
            tableData.classList.add("found");
            return;
        }

        estadoAtual = null;
    }

    reset() {
        estados = {};
        estadosFinais = new Set();
        palavrasCadastradas = new Set();
        proximoEstado = 1
    }

    resetCurrentState() {
        estadoAtual = estadoInicial;
    }

}