import { test, expect } from 'vitest';
import { gradeLabel } from './basics.js';

test("Grade label - se gli passo 100 ottengo ottimo", () => {
  const result = gradeLabel(100);
  expect(result).toBe("Ottimo")
})

test("Grade label - se gli passo 70 ottengo buono", () => {
  const result = gradeLabel(70);
  expect(result).toBe("Buono")
})