const books = require("./data")

// - ✅ Crea un array `authors` che contiene gli autori dei libri.
authors = books.map(book => book.author);
// console.log(authors);


// - ✅ Crea una variabile `areAuthorsAdults` per verificare se sono tutti maggiorenni (età ≥ 18).
areAuthorsAdults = authors.every(author => author.age >=18);
// console.log(areAuthorsAdults)


// - ✅ Ordina `authors` in base all’età:
//   - 🔼 In ordine crescente se `areAuthorsAdults` è `true`
//   - 🔽 In ordine decrescente se `false`
// - ✅ Non creare un nuovo array (ordina in-place).

authors.sort((a, b)=> areAuthorsAdults ? (a.age - b.age) : (b.age - a.age));
console.log(authors)