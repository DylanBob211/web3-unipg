import { describe, test, expect, beforeEach, vi } from 'vitest';
import request from 'supertest';

let app;

beforeEach(async () => {
  vi.resetModules();
  ({ default: app } = await import('./server.js'));
});

describe('GET /api/todos', () => {
  test('restituisce status 200', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.status).toBe(200);
  });

  test('restituisce un array', async () => {
    const res = await request(app).get('/api/todos');
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /api/todos/:id', () => {
  test('restituisce il todo con id esistente', async () => {
    const res = await request(app).get('/api/todos/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
    expect(res.body).toHaveProperty('userId', 1);
    expect(res.body).toHaveProperty('title', 'delectus aut autem');
    expect(res.body).toHaveProperty('completed', false);
  });

  test('restituisce 404 per id inesistente', async () => {
    const res = await request(app).get('/api/todos/999');
    expect(res.status).toBe(404);
  });
});

describe('POST /api/todos', () => {
  test('crea un nuovo todo e restituisce 201', async () => {
    const newTodo = { userId: 2, title: 'Test todo', completed: false };
    const res = await request(app).post('/api/todos').send(newTodo);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.userId).toBe(2);
    expect(res.body.title).toBe('Test todo');
    expect(res.body.completed).toBe(false);
  });
});

describe('DELETE /api/todos/:id', () => {
  test('elimina un todo esistente e restituisce 204', async () => {
    const res = await request(app).delete('/api/todos/1');
    expect(res.status).toBe(204);
  });

  test('restituisce 404 per id inesistente', async () => {
    const res = await request(app).delete('/api/todos/999');
    expect(res.status).toBe(404);
  });
});

describe('PUT /api/todos', () => {
  test('sostituisce l\'intera lista e restituisce 200', async () => {
    const updatedTodos = [
      { userId: 3, id: 10, title: 'Updated todo', completed: true },
      { userId: 4, id: 11, title: 'Another todo', completed: false },
    ];

    const res = await request(app).put('/api/todos').send(updatedTodos);

    expect(res.status).toBe(200);
    expect(res.body).toEqual(updatedTodos);
  });

  test('rende visibile la nuova lista nelle richieste successive', async () => {
    const updatedTodos = [
      { userId: 5, id: 21, title: 'Only todo', completed: true },
    ];

    await request(app).put('/api/todos').send(updatedTodos);
    const res = await request(app).get('/api/todos');

    expect(res.status).toBe(200);
    expect(res.body).toEqual(updatedTodos);
  });
});
