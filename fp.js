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
  `{ name, price, available }` e restituisce un nuovo oggetto nella forma
  `{ currentName, defaultPrice, isAvailable }` senza modificare l'originale.
*/

/*
  **Esercizio 3: First-class + callbacks**
  Implementare `applyTwice(fn, x)` che applica la funzione `fn` due volte al valore `x`
  (es. `applyTwice(x => x * 2, 3)` → 12).
  Implementare `repeat(fn, n)` che restituisce una funzione che applica `fn` esattamente
  `n` volte al valore ricevuto (es. `repeat(x => x + 1, 5)(0)` → 5).
*/

/*
  **Esercizio 4: map/filter/reduce**
  Dato l'array di prodotti

  Costruire una pipeline che:
  1. Filtra solo i prodotti disponibili
  2. Applica uno sconto del 10% al prezzo di ciascuno
  3. Calcola il totale con reduce
  Usare esclusivamente map, filter e reduce (niente for/forEach).
*/

const products = [
  { name: "Mela",   price: 1.5, available: true  },
  { name: "Banana", price: 0.8, available: false },
  { name: "Kiwi",   price: 2.0, available: true  },
  { name: "Pera",   price: 1.2, available: true  },
];

/*
  **Esercizio 5: Closures**
  Implementare `makeCounter(start)` che restituisce un oggetto con i metodi
  `increment()`, `decrement()` e `value()`.
  Lo stato interno (`count`) deve essere privato — non accessibile dall'esterno.
  Usare una closure, non una classe.
*/

/*
  **Esercizio 6: Composition**
  Implementare le funzioni `compose(...fns)` (esegue da destra a sinistra)
  e `pipe(...fns)` (esegue da sinistra a destra).
  Testare entrambe componendo almeno tre trasformazioni su stringhe,
  ad esempio: trim, toLowerCase, capitalize.
*/
