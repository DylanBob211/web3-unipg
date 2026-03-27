export function sum(a, b) {
  return a + b;
}

export function div(a, b) {
  if (b === 0) {
    throw "Non si puo dividere per 0"
  }
  return a / b;
}