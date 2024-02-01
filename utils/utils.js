const removeCharacters = (palavra) => {
    return palavra.replace(/[^\w\s]/g, '');
};

const forbiddenWordsFunction = (array, wordWithoutSpecialCharacters) => {
    return array.filter((wordForbidden) => {
        const regex = new RegExp(`(${wordForbidden.split('').join('+')})`, 'gi');
        return regex.test(wordWithoutSpecialCharacters);
    });
};

module.exports = {
    removeCharacters,
    forbiddenWordsFunction
};