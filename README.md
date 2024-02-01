# SwearGuard - Filtro de Palavrões

Este projeto é um filtro de palavrões que verifica se uma string contém palavras ilícitas. Ele filtra entre 265 palavrões usando o módulo @2toad/profanity para auxiliar. O projeto suporta tanto Português Brasileiro (pt-br) quanto Inglês (english).

## Como funciona

O filtro verifica a string fornecida e retorna `true` se a string contém algum palavrão e `false` caso contrário.

## Exemplos de uso

Aqui estão alguns exemplos de como usar este projeto:

```javascript
// Exemplo em Português Brasileiro
const isWordIlicitaPtBr_01 = checkWordIlicita('Essa é uma string com B.o.c.e.t.a.');
console.log(isWordIlicitaPtBr_01);  // true

const isWordIlicitaPtBr_02 = checkWordIlicita('Essa é uma string com Anus');
console.log(isWordIlicitaPtBr_02);  // true

// Exemplo em Inglês
const isWordIlicitaEn = checkWordIlicita('This is a string with.', 'english');
console.log(isWordIlicitaEn);  // true
```

## Observation
-The complete documentation in English is available in the docs/english folder.