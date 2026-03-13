import { test, expect, describe } from 'vitest';
import { sum, div } from './math'

test("se gli passo 1 e 2 restituisce 3", () => {
  expect(sum(1, 2)).toBe(3);
})

test("se gli passo 0 e 1 ottengo 1", () => {
  expect(sum(0, 1)).toBe(1);
})


test("se gli passo 1 e 0 ottengo 1", () => {
  expect(sum(1, 0)).toBe(1);
})

describe('div', () => {
  
  
  test("dividendo 4 per 2 ottengo 2", () => {
    expect(div(4,2)).toBe(2)
  })
  
  
  test("dividendo 4 per 1 ottengo 4", () => {
    expect(div(4,1)).toBe(4)
  })
  
  test("dividendo 2 per 4 ottengo 0.5", () => {
    expect(div(2,4)).toBe(0.5)
  })
  
  test("dividendo per 0 lancia un errore", () => {
    expect(() => div(2,0)).toThrow()
  })
})