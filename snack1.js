const books = require("./data");

//console.log(books);

// - ✅ Crea una funzione che somma due numeri.
const sumNumbers= (a,b)=> a+b;
//console.log(sumNumbers(1,3));


// - ✅ Crea un array `longBooks` con i libri che hanno più di 300 pagine.
const longBooks = books.filter(book => book.pages > 300);
// console.log(longBooks);


// - ✅ Crea un array `longBooksTitles` che contiene solo i titoli dei libri in `longBooks`.
const longBooksTitles = longBooks.map(book=> book.title);

// - ✅ Stampa ogni titolo in console.
console.log(longBooksTitles);
