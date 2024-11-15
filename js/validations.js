const tokenInputHasInvalidCaracters = (c) => {
    return c.match(/[a-z]/) === null;
}

const mainInputHasInvalidCaracters = (c) => {
    return c.match(/[a-z\s]/) === null;
}

const isTokenEmpty = (token) => {
    return token.trim().length === 0;
}

export { tokenInputHasInvalidCaracters, mainInputHasInvalidCaracters, isTokenEmpty };