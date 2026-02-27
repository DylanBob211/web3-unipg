/**
 * Esercizio 1 — Rettangolo
 *
 * Scrivi una classe `Rectangle` che rappresenta un rettangolo.
 *
 * Il costruttore riceve `width` e `height` (numeri positivi).
 * La classe deve esporre i metodi:
 * - `area()` → area del rettangolo (width * height)
 * - `perimeter()` → perimetro (2 * (width + height))
 * - `isSquare()` → true se width === height
 * - `scale(factor)` → restituisce un NUOVO Rectangle con dimensioni moltiplicate
 *   per `factor` (non modifica il corrente)
 *
 * Esempi:
 *   const r = new Rectangle(4, 6);
 *   r.area()       → 24
 *   r.perimeter()  → 20
 *   r.isSquare()   → false
 *   r.scale(2).area() → 96
 *   r.area()          → 24  (invariato)
 */
export class Rectangle {
  
}

/**
 * Esercizio 2 — Coda (Queue)
 *
 * Scrivi una classe `Queue` che implementa una coda FIFO (First In, First Out).
 *
 * La classe deve esporre:
 * - `enqueue(item)` → aggiunge un elemento in fondo alla coda
 * - `dequeue()` → rimuove e restituisce l'elemento in testa;
 *   se la coda è vuota, lancia un `Error` con messaggio "Coda vuota"
 * - `peek()` → restituisce l'elemento in testa senza rimuoverlo;
 *   se vuota, lancia un `Error` con messaggio "Coda vuota"
 * - `isEmpty()` → true se la coda non ha elementi
 * - `size` → proprietà (getter) che restituisce il numero di elementi
 *
 * La struttura interna deve essere nascosta (campo privato).
 *
 * Esempi:
 *   const q = new Queue();
 *   q.enqueue("a"); q.enqueue("b");
 *   q.peek()     → "a"
 *   q.dequeue()  → "a"
 *   q.size       → 1
 */
export class Queue {
  
}

/**
 * Esercizio 3 — Registro temperature
 *
 * Scrivi una classe `TemperatureLogger` che registra le misurazioni di
 * una sonda di temperatura nel tempo.
 *
 * La classe deve esporre:
 * - `log(value)` → aggiunge una misurazione (numero)
 * - `min()` → valore minimo registrato; null se non ci sono misurazioni
 * - `max()` → valore massimo registrato; null se non ci sono misurazioni
 * - `average()` → media aritmetica arrotondata a due decimali;
 *   null se non ci sono misurazioni
 * - `count` → getter che restituisce il numero di misurazioni
 * - `clear()` → azzera tutte le misurazioni
 *
 * Esempi:
 *   const logger = new TemperatureLogger();
 *   logger.log(20); logger.log(23); logger.log(18);
 *   logger.min()     → 18
 *   logger.max()     → 23
 *   logger.average() → 20.33
 *   logger.count     → 3
 */
export class TemperatureLogger {
  
}

/**
 * Esercizio 4 — Carrello della spesa
 *
 * Scrivi una classe `ShoppingCart` per gestire un carrello e-commerce.
 *
 * Un articolo è un oggetto `{ id, name, price, quantity }`.
 * La classe deve esporre:
 * - `addItem({ id, name, price })` → aggiunge 1 unità. Se l'id esiste già,
 *   incrementa la quantità di 1.
 * - `removeItem(id)` → rimuove completamente l'articolo dal carrello.
 *   Se non esiste, non fa nulla.
 * - `updateQuantity(id, quantity)` → imposta la quantità (deve essere >= 1).
 *   Se quantity < 1, lancia un `Error` con messaggio "Quantità non valida".
 *   Se l'id non esiste, non fa nulla.
 * - `getTotal()` → somma di (price * quantity) per tutti gli articoli,
 *   arrotondata a due decimali.
 * - `getItems()` → restituisce una copia dell'array degli articoli (non il riferimento interno)
 * - `itemCount` → getter che restituisce il numero totale di unità nel carrello
 *
 * Esempi:
 *   const cart = new ShoppingCart();
 *   cart.addItem({ id: 1, name: "Mela", price: 0.5 });
 *   cart.addItem({ id: 1, name: "Mela", price: 0.5 }); // quantità → 2
 *   cart.getTotal() → 1
 *   cart.itemCount  → 2
 */
export class ShoppingCart {
  
}

/**
 * Esercizio 5 — Veicolo ed Elettrico
 *
 * Scrivi due classi: `Vehicle` e `ElectricVehicle`.
 *
 * `Vehicle`:
 * - costruttore: `(make, model, year)`
 * - `describe()` → stringa `"<year> <make> <model>"`
 * - `age()` → anni trascorsi dall'anno del veicolo (usa 2026 come anno corrente)
 *
 * `ElectricVehicle` estende `Vehicle`:
 * - costruttore aggiuntivo: `batteryCapacity` (kWh)
 * - sovrascrive `describe()` → `"<year> <make> <model> (elettrico, <batteryCapacity> kWh)"`
 * - `estimateRange(consumption)` → range stimato in km dato il consumo
 *   in kWh per km (batteryCapacity / consumption), arrotondato all'intero
 *
 * Esempi:
 *   const v = new Vehicle("Toyota", "Yaris", 2018);
 *   v.describe() → "2018 Toyota Yaris"
 *   v.age()      → 8
 *
 *   const e = new ElectricVehicle("Tesla", "Model 3", 2022, 75);
 *   e.describe()              → "2022 Tesla Model 3 (elettrico, 75 kWh)"
 *   e.estimateRange(0.15)     → 500
 *   e instanceof Vehicle      → true
 */
export class Vehicle {
  
}

export class ElectricVehicle extends Vehicle {
 
}

/**
 * Esercizio 6 — Profilo utente con validazione
 *
 * Scrivi una classe `UserProfile` che gestisce i dati di un utente
 * con campi privati e validazione tramite getter e setter.
 *
 * Campi privati: `#username`, `#email`, `#age`
 *
 * Costruttore: `(username, email, age)` — chiama i setter per validare.
 *
 * Getter e setter per:
 * - `username`: deve essere una stringa non vuota (almeno 3 caratteri);
 *   altrimenti lancia `Error("Username non valido")`
 * - `email`: deve contenere `@` e almeno un `.` dopo la `@`;
 *   altrimenti lancia `Error("Email non valida")`
 * - `age`: deve essere un numero tra 0 e 120 (inclusi);
 *   altrimenti lancia `Error("Età non valida")`
 *
 * Metodo:
 * - `toJSON()` → restituisce un oggetto semplice `{ username, email, age }`
 *
 * Esempi:
 *   const u = new UserProfile("alice", "alice@example.com", 25);
 *   u.username        → "alice"
 *   u.age = 200       → Error("Età non valida")
 *   u.toJSON()        → { username: "alice", email: "alice@example.com", age: 25 }
 */
export class UserProfile {
  
}

/**
 * Esercizio 7 — Agenda eventi
 *
 * Scrivi una classe `EventCalendar` per gestire un calendario di eventi.
 *
 * Ogni evento è un oggetto interno `{ id, title, date }` dove `date` è
 * una stringa nel formato `"YYYY-MM-DD"`.
 *
 * La classe deve esporre:
 * - `addEvent(title, date)` → aggiunge un evento e restituisce l'id assegnato
 *   (interi incrementali partendo da 1)
 * - `removeEvent(id)` → rimuove l'evento con quell'id; non fa nulla se assente
 * - `getByDate(date)` → restituisce un array di eventi per quella data
 * - `getUpcoming(fromDate)` → restituisce eventi con data >= fromDate,
 *   ordinati dalla più vicina alla più lontana
 * - `count` → getter con il numero totale di eventi
 *
 * Esempi:
 *   const cal = new EventCalendar();
 *   cal.addEvent("Riunione", "2026-03-01");  // → 1
 *   cal.addEvent("Workshop", "2026-03-01");  // → 2
 *   cal.addEvent("Conferenza", "2026-04-10"); // → 3
 *   cal.getByDate("2026-03-01").length  → 2
 *   cal.getUpcoming("2026-03-15").length → 1
 */
export class EventCalendar {
  
}

/**
 * Esercizio 8 — Inventario magazzino
 *
 * Scrivi una classe `Inventory` per gestire le scorte di un magazzino.
 *
 * Internamente usa un oggetto (dizionario) dove le chiavi sono i nomi
 * dei prodotti e i valori sono le quantità disponibili.
 *
 * La classe deve esporre:
 * - `addStock(product, quantity)` → aggiunge `quantity` unità al prodotto;
 *   se il prodotto non esiste, lo crea. `quantity` deve essere > 0.
 * - `removeStock(product, quantity)` → sottrae `quantity` unità;
 *   lancia `Error("Scorte insufficienti")` se la quantità disponibile è minore.
 *   Lancia `Error("Prodotto non trovato")` se il prodotto non esiste.
 * - `getStock(product)` → quantità disponibile; 0 se il prodotto non esiste.
 * - `getLowStock(threshold)` → restituisce un array di nomi di prodotti
 *   con quantità <= threshold, ordinati alfabeticamente.
 * - `getReport()` → usa `Object.entries` per restituire un array di stringhe
 *   nel formato `"<product>: <quantity> unità"`, ordinate alfabeticamente.
 *
 * Esempi:
 *   const inv = new Inventory();
 *   inv.addStock("Mela", 100);
 *   inv.addStock("Kiwi", 5);
 *   inv.getLowStock(10)  → ["Kiwi"]
 *   inv.getReport()      → ["Kiwi: 5 unità", "Mela: 100 unità"]
 */
export class Inventory {
  
}

/**
 * Esercizio 9 — Utilità per stringhe (metodi statici)
 *
 * Scrivi una classe `StringUtils` con soli metodi statici,
 * senza costruttore (non si istanzia).
 *
 * Metodi statici:
 * - `truncate(str, maxLength, suffix = '...')` → tronca la stringa a `maxLength`
 *   caratteri aggiungendo `suffix` solo se è stata troncata.
 *   Se str.length <= maxLength, restituisce str invariata.
 * - `slugify(str)` → converte la stringa in slug URL-friendly:
 *   tutto minuscolo, spazi (e sequenze di spazi) sostituiti con `-`,
 *   caratteri non alfanumerici e non trattini rimossi.
 *   Es: `"Hello World!"` → `"hello-world"`
 * - `repeat(str, n, separator = '')` → ripete la stringa `n` volte
 *   separata da `separator`. Se n <= 0 restituisce `""`.
 * - `countWords(str)` → conta le parole (sequenze di caratteri non-spazio).
 *   Stringa vuota o solo spazi → 0.
 *
 * Esempi:
 *   StringUtils.truncate("Hello World", 7)          → "Hell..."
 *   StringUtils.truncate("Hello World", 7, '…')     → "Hello …"
 *   StringUtils.truncate("Hi", 10)                  → "Hi"
 *   StringUtils.slugify("Ciao Mondo!")               → "ciao-mondo"
 *   StringUtils.repeat("ha", 3, "-")                → "ha-ha-ha"
 *   StringUtils.countWords("  tre  parole qui  ")   → 3
 */
export class StringUtils {
 
}

/**
 * Esercizio 10 — Classifica punteggi
 *
 * Scrivi una classe `Scoreboard` per gestire i punteggi di un gioco.
 *
 * La classe deve esporre:
 * - `addScore(player, score)` → registra un punteggio per un giocatore.
 *   Un giocatore può avere più punteggi (vengono tutti conservati).
 * - `getBest(player)` → restituisce il punteggio migliore (massimo) del giocatore;
 *   `null` se il giocatore non esiste.
 * - `getAverage(player)` → media dei punteggi del giocatore, arrotondata a due
 *   decimali; `null` se il giocatore non esiste.
 * - `getTopN(n)` → restituisce un array dei primi `n` giocatori ordinati per
 *   punteggio migliore decrescente. Ogni elemento è `{ player, best }`.
 *   In caso di parità, ordina alfabeticamente per nome.
 * - `getRank(player)` → posizione nella classifica (1-based) in base al
 *   punteggio migliore; `null` se il giocatore non esiste.
 *
 * Esempi:
 *   const sb = new Scoreboard();
 *   sb.addScore("Alice", 80); sb.addScore("Alice", 95);
 *   sb.addScore("Bob", 90);
 *   sb.getBest("Alice")    → 95
 *   sb.getAverage("Alice") → 87.5
 *   sb.getTopN(2)          → [{ player: "Alice", best: 95 }, { player: "Bob", best: 90 }]
 *   sb.getRank("Bob")      → 2
 */
export class Scoreboard {
  
}
