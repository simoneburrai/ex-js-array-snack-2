# 📚 JavaScript Books Exercises

Questo progetto contiene una serie di esercizi (Snack) per manipolare un array di oggetti che rappresentano libri. Gli esercizi coinvolgono funzioni di filtro, mappatura, riduzione, promesse e ordinamenti.

## 📦 Dataset iniziale

```js
const books = [
  { 
      title: "React Billionaire", 
      pages: 250, 
      author: { name: 'Alice', age: 35 },
      available: false,
      price: '101€',
      tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
      title: "Advanced JS", 
      pages: 500, 
      author: { name: 'Bob', age: 20 },
      available: true,
      price: '25€',
      tags: ['advanced', 'js', 'mid-senior']
  },
  { 
      title: "CSS Secrets", 
      pages: 320, 
      author: { name: 'Alice', age: 17 },
      available: true,
      price: '8€',
      tags: ['html', 'css', 'junior']
  },
  { 
      title: "HTML Mastery", 
      pages: 200, 
      author: { name: 'Charlie', age: 50 },
      available: false,
      price: '48€',
      tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];
```

---

## 🧩 Snack 1 - Filtra e Modifica

- ✅ Crea una funzione che somma due numeri.
- ✅ Crea un array `longBooks` con i libri che hanno più di 300 pagine.
- ✅ Crea un array `longBooksTitles` che contiene solo i titoli dei libri in `longBooks`.
- ✅ Stampa ogni titolo in console.

---

## 🧩 Snack 2 - Il primo libro scontato

- ✅ Crea un array `availableBooks` con i libri disponibili (`available: true`).
- ✅ Crea `discountedBooks` dove ogni libro ha un prezzo scontato del 20% (formattato in '€' e arrotondato a due decimali).
- ✅ Salva nella variabile `fullPricedBook` il primo libro in `discountedBooks` con un prezzo intero (es. `20€`, senza decimali).

---

## 🧩 Snack 3 - Ordinare gli Autori

- ✅ Crea un array `authors` che contiene gli autori dei libri.
- ✅ Crea una variabile `areAuthorsAdults` per verificare se sono tutti maggiorenni (età ≥ 18).
- ✅ Ordina `authors` in base all’età:
  - 🔼 In ordine crescente se `areAuthorsAdults` è `true`
  - 🔽 In ordine decrescente se `false`
- ✅ Non creare un nuovo array (ordina in-place).

---

## 🧩 Snack 4 - Calcola l’età media

- ✅ Crea un array `ages` con le età degli autori.
- ✅ Calcola `agesSum` con `.reduce()`.
- ✅ Stampa in console l’età media.

---

## 🧩 Snack 5 (Bonus) - Raccogli i libri

> ⚠️ Usa `http://localhost:3333` come base per chiamare l’API, **non** `https://freetestapi.com/api/v1`.

- ✅ Usa `.map()` e `Promise.all()` per creare `getBooks(ids)` che ritorna una Promise risolta con i libri.
- ✅ Testala con: `[2, 13, 7, 21, 19]`
- 📘 Endpoint di esempio: `http://localhost:3333/books/2`

---

## 🧩 Snack 6 (Bonus) - Ordina i libri

- ✅ Crea `areThereAvailableBooks` per sapere se c’è almeno un libro disponibile.
- ✅ Crea `booksByPrice`, ordinato in base al prezzo (crescente).
- ✅ Ordina `booksByPrice` in base alla disponibilità (prima disponibili), senza creare nuovo array.

---

## 🧩 Snack 7 (Bonus) - Analizza i tag

- ✅ Usa `.reduce()` per creare `tagCounts`, un oggetto che conta quante volte ogni tag è usato tra tutti i libri.

---

👨‍💻 Buon divertimento con gli esercizi!
