// Server Express minimale — lab live coding
// Costruiamo insieme un backend REST con dati in memoria

import express from 'express';
import cors from 'cors';

const app = express();

// Middleware: permetti richieste da Angular (localhost:4200)
app.use(cors());
// Middleware: parse automatico del body JSON
app.use(express.json());

// "Database" in memoria — array di post
let posts = [
  { id: 1, title: 'First Post', content: 'Hello World', author: 'Mario' },
  { id: 2, title: 'Second Post', content: 'Learning Node', author: 'Luigi' },
];

// TODO: GET /api/posts
// Restituisce la lista completa dei post
// Status: 200

// TODO: GET /api/posts/:id
// Restituisce il singolo post con l'id specificato
// Status: 200 se trovato, 404 se non esiste

// TODO: POST /api/posts
// Crea un nuovo post con i dati nel body (title, content, author)
// Assegna un id univoco
// Status: 201

// TODO: DELETE /api/posts/:id
// Elimina il post con l'id specificato
// Status: 204 se eliminato, 404 se non esiste

// Avvia il server solo se il file viene eseguito direttamente
// (non quando viene importato dai test)
if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}

export default app;
