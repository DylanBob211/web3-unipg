// Server Express minimale — lab live coding
// Costruiamo insieme un backend REST con dati in memoria

import express from 'express';
import cors from 'cors';

const app = express();

// Middleware: permetti richieste da Angular (localhost:4200)
app.use(cors());
// Middleware: parse automatico del body JSON
app.use(express.json());

// "Database" in memoria — array di todos
let todos = [
  { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: true },
];

// TODO: GET /api/todos
// Restituisce la lista completa dei todo
// Status: 200


// TODO: GET /api/todos/:id
// Restituisce il singolo todo con l'id specificato
// Status: 200 se trovato, 404 se non esiste


// TODO: POST /api/todos
// Crea un nuovo todo con i dati nel body (userId, title, completed)
// Assegna un id univoco
// Status: 201

// TODO: DELETE /api/todos/:id
// Elimina il todo con l'id specificato
// Status: 204 se eliminato, 404 se non esiste


// TODO: PUT /api/todos
// Sostituisce l'intera lista di todos con la lista inviata
// Status: 200

// Avvia il server solo se il file viene eseguito direttamente
// (non quando viene importato dai test)
if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
  });
}

export default app;
