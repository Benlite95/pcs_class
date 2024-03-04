const dbItems = require('./items.js');

module.exports = class Cart {
  constructor(items) {
    this.items = items || {};
  }

  addItem(id, quantity) {
    let q = this.items[id] || 0;
    this.items[id] = q + Number(quantity);

    console.log('addItems - cart items is', this.items);
  }

  getItems() {
    const items = [];

    for(const [key, value] of Object.entries(this.items))
    {
      const item = dbItems.find(i => i.id === +key);

      items.push({
        item,
        quantity: value,
        subtotal: (value * item.price).toFixed(2)
      });
    }

    return items;
  }
};
