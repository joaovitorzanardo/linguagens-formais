const getInputToken = () => {
    return document.getElementById("input-token").value;
}

const clearInputToken = () => {
    document.getElementById("input-token").value = "";
}

export { getInputToken, clearInputToken };