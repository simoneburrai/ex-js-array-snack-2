// > ⚠️ Usa `http://localhost:3333` come base per chiamare l’API, **non** 
// `https://freetestapi.com/api/v1`.

const apiUrl = "http://localhost:3333/books/"

const bookIds = [2, 13, 7, 21, 19];

const fetchJson = async(url)=>{
    const obj = await fetch(url);
    return await obj.json();
}

async function getBooks(arr, url){
    try{
        allBookFetches = arr.map(num => fetchJson(`${url}${num}`));

        return Promise.all(allBookFetches);
    }catch{
        throw new Error("Errore nella raccolta dati da API")
    }
    

}

getBooks(bookIds, apiUrl)
.then(res => console.log(res))
.catch(err => console.error(err));

// - ✅ Usa `.map()` e `Promise.all()` per creare `getBooks(ids)` 
// che ritorna una Promise risolta con i libri.
// - ✅ Testala con: `[2, 13, 7, 21, 19]`
// - 📘 Endpoint di esempio: `http://localhost:3333/books/2`
