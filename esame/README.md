# Modalità d'esame

## Progetto finale (obbligatorio)

Realizzare un'applicazione web **Angular** che implementi i requisiti funzionali descritti nel documento allegato `requisiti.md`.

### Requisiti principali

L'app copre le seguenti aree funzionali:

- Autenticazione con JWT (registrazione, login, logout, route guard)
- Profilo utente (visualizzazione e modifica)
- Ricerca utenti
- Sistema di following
- Creazione ed eliminazione post con like
- Feed personale

### Backend

L'applicazione si interfaccia con un backend REST già disponibile, documentato tramite il file `openapi.yaml` allegato.

> Per visualizzare la documentazione in modo interattivo, aprire [editor.swagger.io](https://editor.swagger.io) e incollare il contenuto del file.

### Consegna

- Creare una **repository pubblica su GitHub** contenente il progetto Angular.
- Il link alla repository è **obbligatorio** per sostenere l'esame.

---

## Esercizi del corso (facoltativi)

Gli studenti possono caricare nella stessa repository (o in una separata) gli esercizi svolti durante il corso. Contribuiscono positivamente alla valutazione.

### Homework JavaScript

Per ciascuno dei file seguenti, **tutti i test devono passare**:

| File | Argomento |
|------|-----------|
| `basics-homework.js` | Funzioni, stringhe, array, validazione |
| `objects-homework.js` | Classi, OOP, getter/setter |
| `ffp-homework.js` | Funzioni pure, higher-order functions, closures |

### Contact Book (app vanilla)

Realizzare una piccola web app in **HTML + CSS + JavaScript puro** per la gestione di una rubrica contatti, seguendo queste specifiche:


L'applicazione deve mostrare un elenco di utenti recuperati esternamente, rispettando in modo quanto più fedele il design fornito nel file PNG contenuto nello zip allegato (su unistudium o all’interno della cartella homework nella repository lab).

Per lo sviluppo devono essere utilizzati esclusivamente HTML, CSS e JavaScript. La logica di gestione dei contatti deve seguire queste specifiche:

- Recupero dei dati: L'endpoint da utilizzare per ottenere la lista iniziale è https://jsonplaceholder.typicode.com/users.
- Persistenza via localStorage: Come già visto per la Todo App, i dati devono essere persistenti. Tuttavia, in questo caso, la chiamata fetch all'API deve essere eseguita una sola volta (quando i dati non sono presenti in localStorage).
- Logica di caricamento: Una volta scaricati i contatti, questi vanno salvati nel localStorage. Ai successivi ricaricamenti della pagina, l'app non dovrà più interrogare l'URL esterno, ma dovrà popolare la rubrica leggendo direttamente i dati salvati in locale.

Il riferimento estetico per il layout è disponibile come immagine all'interno dello zip (file realizzato con Stitch). 

È richiesta quanta più attenzione possibile alla pulizia del codice.
