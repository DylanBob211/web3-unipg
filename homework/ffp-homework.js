/**
 * Esercizio 1 — Normalizza prodotti
 *
 * Ricevi una lista di prodotti grezzi provenienti da un'API
 * con nomi di campo inconsistenti e scrivi una funzione PURA
 * `normalizeProducts(rawProducts)` che restituisce un nuovo array
 * di prodotti normalizzati.
 *
 * Ogni prodotto grezzo ha la forma:
 *   { product_name, selling_price, in_stock, category_id }
 *
 * Ogni prodotto normalizzato deve avere la forma:
 *   { name, price, available, categoryId }
 * dove:
 *   - `name` è `product_name` con spazi iniziali/finali rimossi
 *   - `price` è `selling_price` come numero (arrotondato a 2 decimali)
 *   - `available` è `in_stock` convertito in booleano
 *   - `categoryId` è `category_id` come numero intero
 *
 * L'array originale NON deve essere modificato.
 * Usa `map` — nessun loop esplicito.
 *
 * Esempi:
 *   normalizeProducts([{ product_name: " Mela ", selling_price: 1.499,
 *     in_stock: 1, category_id: "3" }])
 *   → [{ name: "Mela", price: 1.5, available: true, categoryId: 3 }]
 */
export function normalizeProducts(rawProducts) {

}

/**
 * Esercizio 2 — Catalogo filtrato e classificato
 *
 * Scrivi una funzione PURA `filterAndRank(products, minPrice, maxPrice, topN)`
 * che, dato un array di prodotti normalizzati (vedi Esercizio 1):
 *
 * 1. Filtra i prodotti disponibili (`available === true`)
 * 2. Filtra i prodotti con prezzo compreso tra `minPrice` e `maxPrice` (inclusi)
 * 3. Ordina i risultati per prezzo crescente
 * 4. Restituisce solo i primi `topN` elementi
 *
 * Nessun array originale deve essere mutato.
 * Usa `filter`, `sort` (su copia), `slice` — nessun loop esplicito.
 *
 * Esempi:
 *   filterAndRank(products, 1, 5, 2)
 *   → i 2 prodotti disponibili più economici tra 1€ e 5€
 */
export function filterAndRank(products, minPrice, maxPrice, topN) {

}

/**
 * Esercizio 3 — groupBy (higher-order function)
 *
 * Scrivi una funzione PURA `groupBy(arr, keyFn)` dove:
 * - `arr` è un array di qualsiasi tipo
 * - `keyFn` è una funzione che riceve un elemento e restituisce una stringa
 *   da usare come chiave di raggruppamento
 *
 * La funzione restituisce un oggetto dove:
 * - le chiavi sono i valori restituiti da `keyFn`
 * - i valori sono array di elementi che producono quella chiave
 *
 * Usa `reduce` — nessun loop esplicito.
 * L'array originale NON deve essere modificato.
 *
 * Esempi:
 *   groupBy([1, 2, 3, 4, 5], x => x % 2 === 0 ? 'pari' : 'dispari')
 *   → { dispari: [1, 3, 5], pari: [2, 4] }
 *
 *   groupBy(products, p => p.categoryId)
 *   → { 1: [...], 2: [...], ... }
 */
export function groupBy(arr, keyFn) {

}

/**
 * Esercizio 4 — Applicazione parziale
 *
 * Scrivi una funzione `partial(fn, ...fixedArgs)` che restituisce
 * una nuova funzione con i primi argomenti già "fissati".
 *
 * La funzione restituita, quando chiamata con ulteriori argomenti,
 * invoca `fn` con la concatenazione di `fixedArgs` e i nuovi argomenti.
 *
 * L'applicazione parziale è fondamentale per creare funzioni specializzate
 * a partire da funzioni generiche, senza ripetere argomenti comuni.
 *
 * Esempi:
 *   const add = (a, b) => a + b;
 *   const add10 = partial(add, 10);
 *   add10(5)  → 15
 *   add10(20) → 30
 *
 *   const greet = (greeting, name) => `${greeting}, ${name}!`;
 *   const ciao  = partial(greet, 'Ciao');
 *   ciao('Alice') → 'Ciao, Alice!'
 *   ciao('Bob')   → 'Ciao, Bob!'
 */
export function partial(fn, ...fixedArgs) {
}

/**
 * Esercizio 5 — once (closure)
 *
 * Scrivi una funzione `once(fn)` che restituisce una nuova funzione
 * che esegue `fn` solo alla prima chiamata e poi restituisce sempre
 * lo stesso risultato (quello della prima chiamata), ignorando gli
 * argomenti delle chiamate successive.
 *
 * Questo pattern è usato per inizializzazioni costose che devono
 * avvenire una sola volta (lazy initialization, singleton, ecc.).
 *
 * Usa una closure per memorizzare lo stato interno.
 *
 * Esempi:
 *   let count = 0;
 *   const init = once(() => ++count);
 *   init()  → 1
 *   init()  → 1  (non incrementa di nuovo)
 *   init()  → 1
 *   count   → 1  (fn è stata chiamata una sola volta)
 */
export function once(fn) {

}

/**
 * Esercizio 6 — memoize (closure + cache)
 *
 * Scrivi una funzione `memoize(fn)` che restituisce una versione
 * "memoizzata" di `fn`: se la funzione viene chiamata con lo stesso
 * argomento primitivo più volte, il calcolo viene effettuato solo
 * la prima volta e il risultato è recuperato dalla cache.
 *
 * La cache deve essere accessibile solo tramite chiusura (non esposta).
 * Usa un oggetto come dizionario per la cache.
 * Per i test, la funzione memoizzata deve esporre un metodo `cacheSize()`
 * che restituisce il numero di risultati memorizzati.
 *
 * Esempi:
 *   let calls = 0;
 *   const expensive = memoize(n => { calls++; return n * n; });
 *   expensive(4)  → 16  (calcola)
 *   expensive(4)  → 16  (dalla cache)
 *   expensive(5)  → 25  (calcola)
 *   calls         → 2
 *   expensive.cacheSize() → 2
 */
export function memoize(fn) {

}

/**
 * Esercizio 7 — Registro transazioni
 *
 * Scrivi una funzione PURA `computeBalance(transactions)` che,
 * dato un array di transazioni, calcola il saldo finale.
 *
 * Ogni transazione è un oggetto `{ type, amount }` dove:
 * - `type` è `'credit'` (aggiunge al saldo) o `'debit'` (sottrae)
 * - `amount` è un numero positivo
 *
 * Usa `reduce` — nessun loop esplicito.
 * Arrotonda il risultato finale a due decimali.
 * Se l'array è vuoto, restituisci 0.
 *
 * Scrivi anche `getCredits(transactions)` e `getDebits(transactions)`:
 * funzioni pure che restituiscono rispettivamente la somma totale
 * di crediti e debiti, usando `filter` + `reduce`.
 *
 * Esempi:
 *   computeBalance([
 *     { type: 'credit', amount: 100 },
 *     { type: 'debit',  amount: 30 },
 *     { type: 'credit', amount: 50 },
 *   ]) → 120
 */
export function computeBalance(transactions) {
 
}

export function getCredits(transactions) {

}

export function getDebits(transactions) {

}

/**
 * Esercizio 8 — Appiattisci righe d'ordine
 *
 * In un sistema e-commerce gli ordini hanno la forma:
 *   { id, customerId, items: [{ product, qty, price }] }
 *
 * Scrivi una funzione PURA `flattenLineItems(orders)` che restituisce
 * un array piatto di righe d'ordine, dove ogni elemento ha la forma:
 *   { orderId, customerId, product, qty, price, total }
 * dove `total = qty * price` (arrotondato a 2 decimali).
 *
 * Usa `flatMap` (o `reduce`) — nessun loop esplicito.
 * L'array originale NON deve essere modificato.
 *
 * Esempi:
 *   flattenLineItems([
 *     { id: 1, customerId: 'c1', items: [
 *       { product: 'Mela', qty: 3, price: 0.5 },
 *       { product: 'Kiwi', qty: 1, price: 2.0 },
 *     ]},
 *   ])
 *   → [
 *     { orderId: 1, customerId: 'c1', product: 'Mela', qty: 3, price: 0.5, total: 1.5 },
 *     { orderId: 1, customerId: 'c1', product: 'Kiwi', qty: 1, price: 2.0, total: 2.0 },
 *   ]
 */
export function flattenLineItems(orders) {

}

/**
 * Esercizio 9 — Helper immutabili per array
 *
 * Scrivi tre funzioni PURE per modificare array senza mai mutarli:
 *
 * - `updateAt(arr, index, value)` → restituisce un nuovo array dove
 *   l'elemento all'indice `index` è sostituito con `value`.
 *
 * - `removeAt(arr, index)` → restituisce un nuovo array senza l'elemento
 *   all'indice `index`.
 *
 * - `insertAt(arr, index, value)` → restituisce un nuovo array con `value`
 *   inserito PRIMA dell'elemento all'indice `index`.
 *   Se `index >= arr.length`, aggiunge in coda.
 *
 * Tutte e tre NON devono modificare l'array originale.
 * Usa spread operator e/o `slice` — nessun loop esplicito.
 *
 * Esempi:
 *   updateAt([1, 2, 3], 1, 99)   → [1, 99, 3]
 *   removeAt([1, 2, 3], 1)       → [1, 3]
 *   insertAt([1, 2, 3], 1, 99)   → [1, 99, 2, 3]
 *   insertAt([1, 2, 3], 10, 99)  → [1, 2, 3, 99]
 */
export function updateAt(arr, index, value) {
}

export function removeAt(arr, index) {
}

export function insertAt(arr, index, value) {
}

/**
 * Esercizio 10 — Pipeline dati con pipe
 *
 * Implementa la funzione `pipe(...fns)` che compone funzioni
 * da sinistra a destra: `pipe(f, g, h)(x)` equivale a `h(g(f(x)))`.
 *
 * Poi usa `pipe` per costruire una funzione `processUserReport(users)`
 * che elabora una lista di utenti grezzi attraverso una pipeline di trasformazioni:
 *
 * 1. **normalize** — converte ogni utente in `{ name, email, age }` dove
 *    `name` è `first_name + ' ' + last_name` (trimmed) e
 *    `age` è un intero
 * 2. **filterAdults** — mantiene solo gli utenti con `age >= 18`
 * 3. **sortByName** — ordina alfabeticamente per `name` (su copia)
 * 4. **toReport** — map su ogni utente → stringa `"<name> (<age>)"`
 *
 * Ogni fase deve essere una funzione pura separata (esportata).
 * L'array originale NON deve mai essere modificato.
 *
 * Esempi:
 *   processUserReport([
 *     { first_name: 'Alice ', last_name: 'Rossi', age: '30', email: 'a@x.com' },
 *     { first_name: 'Bob',   last_name: 'Verdi', age: '15', email: 'b@x.com' },
 *   ])
 *   → ["Alice Rossi (30)"]
 */
export const pipe = (...fns) => x => {};

export const normalizeUsers = users => {}

export const filterAdults = users => {};

export const sortByName = users => {};

export const toReport = users => {};

export const processUserReport = pipe(
  normalizeUsers,
  filterAdults,
  sortByName,
  toReport,
);
