# SwearGuard - Profanity Filter

This project is a profanity filter that checks if a string contains illicit words. It filters through 265 swear words using the @2toad/profanity module to assist. The project supports both Brazilian Portuguese (pt-br) and English (english).

## How it works

The filter checks the provided string and returns `true` if the string contains any swear word and `false` otherwise.

## Usage Examples

Here are some examples of how to use this project:

```javascript
// Example in Brazilian Portuguese
const isWordIlicitaPtBr_01 = checkWordIlicita('Essa é uma string com B.o.c.e.t.a.');
console.log(isWordIlicitaPtBr_01);  // true

const isWordIlicitaPtBr_02 = checkWordIlicita('Essa é uma string com Anus');
console.log(isWordIlicitaPtBr_02);  // true

// Example in English
const isWordIlicitaEn = checkWordIlicita('This is a string with.', 'english');
console.log(isWordIlicitaEn);  // true
```