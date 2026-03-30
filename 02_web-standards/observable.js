export class Observable {

  #listeners = [];
  #value;

  constructor(initalValue) {
    this.#value = initalValue;
  }

  subscribe(fn) {
    this.#listeners.push(fn)
  }

  next(value) {
    this.#value = value;
    for (const listener of this.#listeners) {
      listener(value);
    }
  }

  get value() {
    return this.#value;
  }
}
