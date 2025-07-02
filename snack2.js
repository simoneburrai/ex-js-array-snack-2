const books = require("./data");
// console.log(books);

// - ✅ Crea un array `availableBooks` con i libri disponibili (`available: true`).
const availableBooks = books.filter(book => book.available);
// console.log("------AVAILABLE BOOKS---------");
// console.log(availableBooks)



// - ✅ Crea `discountedBooks` dove ogni libro ha un prezzo scontato del 20%
//  (formattato in '€' e arrotondato a due decimali).
discountBooks = books.map(book=> {
    const priceString = book.price;
    const price = priceString.split("€");
    currentPrice = parseInt(price[0]);
    if(!isNaN(currentPrice)){
        discountedPrice = (currentPrice - ((20*currentPrice)/100)).toFixed(2);
        return {...book, price: `${discountedPrice}€`}
    }
})

console.log(discountBooks)



// - ✅ Salva nella variabile `fullPricedBook` il primo libro in 
// `discountedBooks` con un prezzo intero (es. `20€`, senza decimali).

const fullPricedBook = discountBooks.find(book => {
    const priceString = book.price;
    const price = priceString.split("€");
    currentPrice = parseFloat(price[0]);
    return currentPrice === parseInt(currentPrice);
})

console.log("FULL PRICED BOOK: ",  fullPricedBook)