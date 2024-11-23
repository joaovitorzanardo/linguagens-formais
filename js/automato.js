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

    // Método para adicionar uma palavra ao autômato
    adicionarPalavra(palavra) {
        let estadoAtual = estadoInicial;

        // Para cada caractere da palavra, cria uma transição
        for (let i = 0; i < palavra.length; i++) {
            const letra = palavra[i];

            // Se não existir uma transição para a letra, cria o próximo estado
            if (!estados[estadoAtual]) {
                estados[estadoAtual] = {};
            }

            if (!estados[estadoAtual][letra]) {
                const novoEstado = 'q' + proximoEstado++;
                estados[estadoAtual][letra] = novoEstado;
            }

            // Move para o próximo estado
            estadoAtual = estados[estadoAtual][letra];
        }

        // Marca o último estado alcançado como estado final
        estadosFinais.add(estadoAtual);
        palavrasCadastradas.add(palavra); // Armazena a palavra cadastrada
        estadoAtual = estadoInicial;
    }

    // Função para verificar se uma palavra é aceita pelo autômato (somente se for exatamente igual)
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