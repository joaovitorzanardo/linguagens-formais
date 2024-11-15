import { mainInputHasInvalidCaracters, tokenInputHasInvalidCaracters } from './validations.js';

const mainInputKeypressHandler = (e) => {
    if (mainInputHasInvalidCaracters(e.key)) {
        e.preventDefault();
    }
}

const tokenInputKeypressHandler = (e) => {
    if (tokenInputHasInvalidCaracters(e.key)) {
        e.preventDefault();
    }
}

export { mainInputKeypressHandler, tokenInputKeypressHandler };