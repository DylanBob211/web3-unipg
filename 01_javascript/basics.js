/*
  **Esercizio: variabili e tipi**. 
  Dichiarare con `const` e `let`: un numero, una stringa, un booleano, `null`, `undefined`. Stampare ognuno con `console.log()` e osservare l'output. Poi provare a riassegnare una `const` e osservare l'errore.
*/
const number = 10;
console.log(number)

/* 
  **Esercizio: espressioni e operatori**. 
  Calcolare l'area di un rettangolo dati larghezza e altezza.
  Dichiarare due variabili `height` e `width` con valori numerici.
  Stampare il risultato con una template literal: `` `Area: ${area}` ``.
*/
const height = 10;
const width = 20;
console.log(`Area: ${width * height}`)
/*
  **Esercizio: funzione**. 
  Scrivere una funzione `greet(name)` che restituisce `"Ciao, <name>!"`. Chiamarla con tre nomi diversi e stampare i risultati.
  Scrivere una funzione `sum` che prende due numeri e restituisce la loro somma. Testarla con alcuni valori.
*/
const name = "Nicola"
function greet() {
  console.log(`Ciao, ${name}!`)
}

greet()

function sum(a, b) {
  return a + b
}

console.log(sum(1,2))

/*
  **Esercizio: condizioni**. 
  Scrivere una funzione `classify(n)` che restituisce `"positivo"`, `"negativo"` o `"zero"` in base al valore di `n`. 
  Testarla con almeno tre valori.
*/

function classify(n) {
  if (n > 0) {
    return "positivo"
  }
  else if (n < 0) {
    return "negativo"
  }
  else  {
    return "zero"
  }
}

console.log(classify(-1))

/*
  **Esercizio: array e loop**. 
  Dato un array di numeri, calcolare la somma usando un ciclo `for` classico o un ciclo `for...of`. 
  Riutilizzare la funzione sum
*/
const numbers = [1, 2, 3, 4, 5, 6];

function sumArray(arr) {
  let sum = 0;
  for (let i =0 ; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum;
}

function sumArrayWithForOfLoop(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item
  }
  return sum;
}

const result = sumArray(numbers);
console.log(result);

/*
  **Esercizio: voto letterale**.
  Scrivere una funzione `gradeLabel(score)` che, dato un punteggio numerico da 0 a 100,
  restituisce una stringa descrittiva:
  - 90–100 → "Ottimo"
  - 70–89  → "Buono"
  - 55–69  → "Sufficiente"
  - 0–54   → "Insufficiente"
  Testarla con almeno quattro valori diversi.
*/
export function gradeLabel(score) {
  if (score <= 100 && score >= 90) {
    return "Ottimo"
  }
  if (score < 90 && score >= 70) {
    return "Buono"
  }
  if (score < 70 && score >= 55) {
    return "Sufficiente"
  }
  return "Insufficiente"
}

const label = gradeLabel(70);
console.log(label)

/*
  **Esercizio: anno bisestile**.
  Scrivere una funzione `isLeapYear(year)` che restituisce `true` se l'anno è bisestile,
  `false` altrimenti.
  Un anno è bisestile se è divisibile per 4, tranne i centenari (divisibili per 100),
  a meno che non siano anche divisibili per 400.
  Testare con: 2000, 1900, 2024, 2023.
*/
function isLeapYear(year) {

}

/*
  **Esercizio: calcola l'età**.
  Scrivere una funzione `getAge(birthYear)` che, dato l'anno di nascita,
  restituisce una stringa come `"Hai 24 anni"`.
  Se `birthYear` è nel futuro, restituire `"Anno non valido"`.
  Usare il valore 2026 come anno corrente.
*/
function getAge(birthYear) {

}

/*
  **Esercizio: prezzo con IVA**.
  Scrivere una funzione `addVAT(price, rate)` che restituisce il prezzo lordo
  applicando l'aliquota IVA (es. 22 per 22%).
  Se `price` è negativo o `rate` è fuori dall'intervallo 0–100, restituire `null`.
  Stampare il risultato con una template literal: `"Prezzo lordo: €X"`.
*/
function addVAT(price, rate) {

}

/*
  **Esercizio: classifica triangolo**.
  Scrivere una funzione `classifyTriangle(a, b, c)` che restituisce:
  - "equilatero" se tutti e tre i lati sono uguali
  - "isoscele" se esattamente due lati sono uguali
  - "scaleno" se tutti i lati sono diversi
  Testarla con almeno tre combinazioni diverse.
*/
function classifyTriangle(a, b, c) {

}

/*
  **Esercizio: trova il minimo**.
  Dato un array di temperature giornaliere `[12, -3, 7, -1, 5, -8, 2]`,
  scrivere una funzione `findMin(arr)` che usa un ciclo `for` per trovare
  e restituire il valore più basso.
  Stampare il risultato: `"Temperatura minima: X°C"`.
*/
const temperatures = [12, -3, 7, -1, 5, -8, 2];

function findMin(arr) {

}

/*
  **Esercizio: tabellina**.
  Scrivere una funzione `multiplicationTable(n)` che stampa la tabellina del numero `n`
  da 1 a 10 usando un ciclo `for`, nel formato: `"3 x 4 = 12"`.
  Chiamarla con almeno due numeri diversi.
*/
function multiplicationTable(n) {

}
