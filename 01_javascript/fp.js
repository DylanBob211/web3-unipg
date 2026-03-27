/*
  **Esercizio 1: Pure vs impure**
  Date le funzioni seguenti, identificare quali sono pure e quali impure.
  Riscrivere quelle impure in versione pura, eliminando le dipendenze da stato esterno
  o le mutazioni degli argomenti.

  */

let discount = 0.1;
function applyDiscount(price) { return price - price * discount; }

function addItem(cart, item) { cart.push(item); return cart; }

function double(x) { return x * 2; }

/*
  **Esercizio 2: Transformation function**
  Scrivere una funzione pura `transformProduct` che prende un oggetto
  `{ name, price, inStock }` e restituisce un nuovo oggetto nella forma
  `{ currentName, defaultPrice, isAvailable }` senza modificare l'originale.
*/

/*
  **Esercizio 3: First-class + callbacks**
  Implementare `repeat(fn, n)` che restituisce una funzione che applica `fn` esattamente
  `n` volte al valore ricevuto (es. `repeat(x => x + 1, 5)(0)` → 5).
*/

/*
  **Esercizio 4: Closures**
  Implementare `makeCounter(start)` che restituisce un oggetto con i metodi
  `increment()`, `decrement()` e `value()`.
  Lo stato interno (`count`) deve essere privato — non accessibile dall'esterno.
  Usare una closure, non una classe.
*/

/*
  **Esercizio 5: map/filter/reduce**
  Dato l'array di prodotti

  Costruire una pipeline che:
  1. Filtra solo i prodotti disponibili
  2. Applica uno sconto del 10% al prezzo di ciascuno
  3. Calcola il totale con reduce
  Usare esclusivamente map, filter e reduce (niente for/forEach).
*/

const products = [
  { name: "Mela", price: 1.5, available: true },
  { name: "Banana", price: 0.8, available: false },
  { name: "Kiwi", price: 2.0, available: true },
  { name: "Pera", price: 1.2, available: true },
];

/*
  **Esercizio 6: pipe**
  Partendo dall'esercizio precedente, riscrivere la stessa logica usando funzioni piccole
  e una composizione con `pipe`.

  Obiettivo: implementare `getDiscountedAvailableTotal(products)`.

  Passi consigliati:
  1. Implementare `pipe(...fns)`
  2. Scrivere `onlyAvailable(items)`
  3. Scrivere `toPrices(items)`
  4. Scrivere `applyDiscount(rate)` che restituisce una funzione capace di scontare tutti i prezzi
  5. Scrivere `sum(prices)`
  6. Comporre tutto con `pipe`

  Vincoli:
  - usare `filter`, `map` e `reduce`
  - non mutare mai l'array originale

  Risultato atteso con `products`: 4.23
*/

const pipe = (...fns) => input => { };

const onlyAvailable = items => { };

const toPrices = items => { };

const applyDiscount = rate => prices => { };

const sum = prices => { };

const getDiscountedAvailableTotal = pipe(
  onlyAvailable,
  toPrices,
  applyDiscount(0.1),
  sum,
);

console.log(getDiscountedAvailableTotal(products));

