const books = require("./data")

// - ✅ Crea un array `ages` con le età degli autori.
const ages = books.map(book => book.author.age);
console.log("Età degli autori: ",ages)

// - ✅ Calcola `agesSum` con `.reduce()`.
const agesSum = ages.reduce((a,b) => a+b);
console.log("Somma delle età degli autori: ", agesSum)

// - ✅ Stampa in console l’età media.
console.log("Età Media degli autori: ", agesSum / ages.length)