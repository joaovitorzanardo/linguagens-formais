const getInputToken = () => {
    return document.getElementById("input-token").value;
}

const isTokenEmpty = (token) => {
    return token.trim().length === 0;
}

const clearInputToken = () => {
    document.getElementById("input-token").value = "";
}

export { getInputToken, clearInputToken, isTokenEmpty };