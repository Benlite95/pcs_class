module.exports = class Cart {
  constructor(items) {
    this.items = items || {};
  }

  addItem(id, quantity) {
    let q = this.items[id] || 0;
    this.items[id] = q + Number(quantity);

    console.log('addItems - cart items is', this.items);
  }
};
