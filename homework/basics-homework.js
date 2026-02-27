/**
 * Esercizio 1 — Convertitore di temperatura
 *
 * Scrivi una funzione `convertTemperature(value, unit)` che converte
 * una temperatura tra Celsius e Fahrenheit.
 *
 * - Se `unit` è `'C'`, converti il valore da Celsius a Fahrenheit.
 * - Se `unit` è `'F'`, converti il valore da Fahrenheit a Celsius.
 *
 * Formule:
 *   °F = °C * 9/5 + 32
 *   °C = (°F - 32) * 5/9
 *
 * Arrotonda il risultato a due decimali.
 * Se `unit` non è né 'C' né 'F', restituisci `null`.
 *
 * Esempi:
 *   convertTemperature(0, 'C')   → 32
 *   convertTemperature(100, 'C') → 212
 *   convertTemperature(32, 'F')  → 0
 *   convertTemperature(98.6, 'F') → 37
 */
export function convertTemperature(value, unit) {
}

/**
 * Esercizio 2 — Conta le vocali
 *
 * Scrivi una funzione `countVowels(str)` che restituisce il numero
 * di vocali presenti nella stringa `str` (case insensitive).
 *
 * Considera vocali: a, e, i, o, u
 *
 * Esempi:
 *   countVowels("hello")          → 2
 *   countVowels("JavaScript")     → 3
 *   countVowels("AEIOU")          → 5
 *   countVowels("bcdfg")          → 0
 *   countVowels("")               → 0
 */
export function countVowels(str) {
}

/**
 * Esercizio 3 — Limita un valore (clamp)
 *
 * Scrivi una funzione `clamp(value, min, max)` che restituisce `value`
 * limitato all'intervallo [min, max]:
 * - Se `value` è minore di `min`, restituisce `min`.
 * - Se `value` è maggiore di `max`, restituisce `max`.
 * - Altrimenti restituisce `value` invariato.
 *
 * Questa funzione è molto usata in ambito UI e animazioni per limitare
 * valori come l'opacità (0–1) o la posizione di un cursore.
 *
 * Esempi:
 *   clamp(5, 1, 10)   → 5
 *   clamp(-3, 0, 100) → 0
 *   clamp(150, 0, 100) → 100
 *   clamp(0, 0, 1)    → 0
 */
export function clamp(value, min, max) {
}

/**
 * Esercizio 4 — FizzBuzz
 *
 * Scrivi una funzione `fizzbuzz(n)` che restituisce un array di stringhe
 * per i numeri da 1 a `n` (incluso) seguendo queste regole:
 * - Multipli di 3: "Fizz"
 * - Multipli di 5: "Buzz"
 * - Multipli sia di 3 che di 5: "FizzBuzz"
 * - Tutti gli altri: il numero convertito in stringa (es. "1", "2")
 *
 * Il FizzBuzz è un classico esercizio di selezione impiegato anche
 * nei colloqui tecnici per testare la comprensione dei condizionali.
 *
 * Esempi:
 *   fizzbuzz(5)  → ["1", "2", "Fizz", "4", "Buzz"]
 *   fizzbuzz(15) → [..., "FizzBuzz"]  // l'ultimo elemento
 */
export function fizzbuzz(n) {
}

/**
 * Esercizio 5 — Parola più lunga
 *
 * Scrivi una funzione `longestWord(sentence)` che restituisce la parola
 * più lunga presente nella stringa `sentence`.
 * In caso di parità, restituisci la prima in ordine di apparizione.
 * Se la stringa è vuota, restituisci una stringa vuota `""`.
 *
 * Utile in contesti di analisi testuale e SEO.
 *
 * Esempi:
 *   longestWord("the quick brown fox")   → "quick"
 *   longestWord("un due tre")             → "due"    // prima tra pari
 *   longestWord("")                       → ""
 */
export function longestWord(sentence) {
}

/**
 * Esercizio 6 — Controllo palindromo
 *
 * Scrivi una funzione `isPalindrome(str)` che restituisce `true` se la
 * stringa `str` è un palindromo, `false` altrimenti.
 *
 * Ignora spazi e differenze maiuscolo/minuscolo.
 *
 * Una stringa è palindroma se si legge allo stesso modo da sinistra a
 * destra e da destra a sinistra. Utile in algoritmi di validazione e
 * giochi con le parole.
 *
 * Esempi:
 *   isPalindrome("racecar")                          → true
 *   isPalindrome("A man a plan a canal Panama")      → true
 *   isPalindrome("hello")                            → false
 *   isPalindrome("Era una vasca da bagno assai grande")  → false
 */
export function isPalindrome(str) {
}

/**
 * Esercizio 7 — Calcola sconto
 *
 * Scrivi una funzione `applyDiscount(price, discountPercent)` che
 * restituisce il prezzo finale dopo aver applicato uno sconto percentuale.
 *
 * Valida gli input:
 * - `price` deve essere un numero positivo (> 0).
 * - `discountPercent` deve essere compreso tra 0 e 100 (inclusi).
 * - Se uno dei valori non è valido, restituisci `null`.
 *
 * Arrotonda il risultato a due decimali.
 * Tipico in sistemi e-commerce e gestionali.
 *
 * Esempi:
 *   applyDiscount(100, 20)   → 80
 *   applyDiscount(49.99, 10) → 44.99
 *   applyDiscount(50, 0)     → 50
 *   applyDiscount(-10, 20)   → null
 *   applyDiscount(100, 110)  → null
 */
export function applyDiscount(price, discountPercent) {
}

/**
 * Esercizio 8 — Rimuovi duplicati
 *
 * Scrivi una funzione `removeDuplicates(arr)` che restituisce un nuovo array
 * contenente gli stessi elementi di `arr` ma senza ripetizioni.
 * L'ordine di apparizione originale deve essere preservato.
 *
 * Non modificare l'array originale.
 * Utile nella pulizia di dati provenienti da API o database.
 *
 * Suggerimento: puoi usare `filter` e `indexOf`, oppure `reduce`,
 * oppure `Set` — scegli l'approccio che preferisci.
 *
 * Esempi:
 *   removeDuplicates([1, 2, 2, 3, 1])       → [1, 2, 3]
 *   removeDuplicates(["a", "b", "a", "c"])   → ["a", "b", "c"]
 *   removeDuplicates([])                      → []
 *   removeDuplicates([42])                    → [42]
 */
export function removeDuplicates(arr) {
}

/**
 * Esercizio 9 — Capitalizza ogni parola
 *
 * Scrivi una funzione `capitalizeWords(sentence)` che restituisce una nuova
 * stringa in cui ogni parola ha la prima lettera maiuscola e le restanti
 * lettere minuscole.
 *
 * Se la stringa è vuota, restituisci una stringa vuota.
 * Utile per formattare nomi, titoli e intestazioni.
 *
 * Esempi:
 *   capitalizeWords("hello world")        → "Hello World"
 *   capitalizeWords("JAVASCRIPT is FUN")  → "Javascript Is Fun"
 *   capitalizeWords("ciao")               → "Ciao"
 *   capitalizeWords("")                   → ""
 */
export function capitalizeWords(sentence) {

}

/**
 * Esercizio 10 — Valida una password
 *
 * Scrivi una funzione `validatePassword(password)` che verifica se una
 * password rispetta le seguenti regole:
 * 1. Almeno 8 caratteri
 * 2. Almeno una lettera maiuscola
 * 3. Almeno un numero
 * 4. Almeno un carattere speciale tra: ! @ # $ % ^ & *
 *
 * Restituisce un array di stringhe con i messaggi di errore in italiano
 * per ogni regola non rispettata.
 * Se la password è valida, restituisce un array vuoto.
 *
 * Questo tipo di validazione è fondamentale nei form di registrazione.
 *
 * Esempi:
 *   validatePassword("Abcdefg1!")  → []
 *   validatePassword("abc")        → [
 *     "Almeno 8 caratteri",
 *     "Almeno una lettera maiuscola",
 *     "Almeno un numero",
 *     "Almeno un carattere speciale (!@#$%^&*)"
 *   ]
 *   validatePassword("abcdefgh")   → [
 *     "Almeno una lettera maiuscola",
 *     "Almeno un numero",
 *     "Almeno un carattere speciale (!@#$%^&*)"
 *   ]
 */
export function validatePassword(password) {

}
