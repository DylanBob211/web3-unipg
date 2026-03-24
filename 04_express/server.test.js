import { describe, test, expect, beforeEach } from 'vitest';
import request from 'supertest';
import app from './server.js';

describe('GET /api/posts', () => {
  test('restituisce status 200', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.status).toBe(200);
  });

  test('restituisce un array', async () => {
    const res = await request(app).get('/api/posts');
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /api/posts/:id', () => {
  test('restituisce il post con id esistente', async () => {
    const res = await request(app).get('/api/posts/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  test('restituisce 404 per id inesistente', async () => {
    const res = await request(app).get('/api/posts/999');
    expect(res.status).toBe(404);
  });
});

describe('POST /api/posts', () => {
  test('crea un nuovo post e restituisce 201', async () => {
    const newPost = { title: 'Test Post', content: 'Test content', author: 'Tester' };
    const res = await request(app).post('/api/posts').send(newPost);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Post');
    expect(res.body.author).toBe('Tester');
  });
});

describe('DELETE /api/posts/:id', () => {
  test('elimina un post esistente e restituisce 204', async () => {
    const res = await request(app).delete('/api/posts/1');
    expect(res.status).toBe(204);
  });

  test('restituisce 404 per id inesistente', async () => {
    const res = await request(app).delete('/api/posts/999');
    expect(res.status).toBe(404);
  });
});
