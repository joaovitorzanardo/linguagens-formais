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
}

export { getInputToken, getInputMain, getConsole, clearInputToken, clearConsole };