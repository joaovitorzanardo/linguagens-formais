const TOKENS_KEY = "tokens";

const getTokensFromLocalStorage = () => {
    return localStorage.getItem(TOKENS_KEY) === null ? [] : JSON.parse(localStorage.getItem(TOKENS_KEY));
}

const save = (token) => {
    let tokens = getTokensFromLocalStorage();
    tokens.push(token);
    localStorage.setItem(TOKENS_KEY, JSON.stringify(tokens));
}

const remove = (token) => {
    let tokens = getTokensFromLocalStorage();

    tokens = tokens.filter(t => {
        return t !== token;
    });

    localStorage.setItem(TOKENS_KEY, JSON.stringify(tokens));
}

const findAll = () => {
    return getTokensFromLocalStorage();
}

const tokenAlreadyExists = (token) => {
    return getTokensFromLocalStorage().includes(token);
}

export { save, remove, findAll, tokenAlreadyExists };