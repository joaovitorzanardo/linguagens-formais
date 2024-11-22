let instance = null;
let estados = {};
let estadoInicial = 'q0';
let estadosFinais = new Set();
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

    // Método para adicionar uma palavra ao autômato
    adicionarPalavra(palavra) {
        let estadoAtual = estadoInicial;

        // Para cada caractere da palavra, cria uma transição
        for (let i = 0; i < palavra.length; i++) {
            const letra = palavra[i];

            // Se não existir uma transição para a letra, cria uma nova
            if (!estados[estadoAtual]) {
                estados[estadoAtual] = {};
            }

            // Se não existir uma transição para a letra, cria o próximo estado
            if (!estados[estadoAtual][letra]) {
                const novoEstado = 'q' + this.proximoEstado++;
                estados[estadoAtual][letra] = novoEstado;
            }

            // Move para o próximo estado
            estadoAtual = estados[estadoAtual][letra];
        }

        // Marca o estado final para a palavra
        estadosFinais.add(estadoAtual);
    }

    // Função para verificar se uma palavra é aceita pelo autômato
    reconhecer(palavra) {
        let estadoAtual = estadoInicial;

        for (let i = 0; i < palavra.length; i++) {
            const letra = palavra[i];

            // Verifica se existe uma transição válida para a letra
            if (estados[estadoAtual] && estados[estadoAtual][letra]) {
                estadoAtual = estados[estadoAtual][letra];
            } else {
                return false;  // Se não houver transição, a palavra não é aceita
            }
        }

        // Se o estado final alcançado for um estado de aceitação, a palavra é aceita
        return estadosFinais.has(estadoAtual);
    }

    resetEstados() {
        estados = {};
    }

}