const order = {
  id: 42,
  customer: {
    name: "Alice",
    address: {
      city: "Perugia",
      zip: "06100"
    }
  },
  items: [
    { product: "Mela", qty: 3 },
    { product: "Kiwi", qty: 1 }
  ]
};
const key = 'costumer'
console.log(order[key]);
