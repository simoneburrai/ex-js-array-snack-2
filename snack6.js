const books = require("./data")
// - ✅ Crea `areThereAvailableBooks` per sapere se c’è 
// almeno un libro disponibile.

const areThereAvailableBooks = books.some(book => book.available);
console.log(areThereAvailableBooks)


// - ✅ Crea `booksByPrice`, ordinato in base al prezzo (crescente).
const booksByPrice = books.toSorted( (book1, book2)=> {
    const priceStringBook1 = book1.price;
    const priceStringBook2 = book2.price;
    const price1 = priceStringBook1.split("€")
    const price2 = priceStringBook2.split("€");
    currentPrice1 = parseInt(price1[0]);
    currentPrice2 = parseInt(price2[0]);
    return currentPrice1 - currentPrice2
})

console.log(booksByPrice)

// - ✅ Ordina `booksByPrice` in base alla disponibilità (prima disponibili), 
// senza creare nuovo array.

booksByPrice.sort((book1, book2)=>{
    book1Value = book1.available ? 1 : -1;
    book2Value= book2.available ? 1 : -1;
    return book2Value - book1Value
})

console.log("------BOOKS BY PRICE --------")
console.log(booksByPrice)