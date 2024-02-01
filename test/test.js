const { checkWordIlicita } = require("../src/SwearGuard");

const word = checkWordIlicita("sua P.U.T.A");

console.log(word ? "palavra contém palavrão" : "palavra não contém palavrão");