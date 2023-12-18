(function () {
  'use strict';

  class Order {
    constructor(customer, address, items) {
      this.customer = customer;
      this.address = address;
      this.items = items;
    }

    static fromJSON(props) {
      const {customer, address, items} = props;
      return new Order(customer, address, items.map(item => Item.fromJSON(item)));
      /*this.customer = customer;
      this.address = address;
      this.items = items.map(item => new Item(item));*/
    }

    get total() {
      /*let total = 0;
      this.items.forEach(item => total += item.quantity * item.price);
      return total;*/
      return this.items.reduce((a, c) => a + c.quantity * c.price, 0);
    }

    toHTML() {
      let html = `
        <h2>order</h2>
        <p>customer: ${this.customer}</p>
        <p>address: ${this.address}</p>
        <p>total: ${this.total}
        <h3>items</h3>
        <ul>
      `;

      html += this.items.map(item => item.toHTML()).join('');

      html += '</ul>';

      return html;
    }
  }

  class Item {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }

    static fromJSON(props) {
      const {item, quantity, total} = props;
      return new Item(item, quantity, total / quantity);
      /*this.name = item;
      this.quantity = quantity;
      this.price = total / quantity;*/
    }

    toHTML() {
      return `<li>${this.name} ${this.quantity} @ ${this.price}</li>`;
    }
  }

  //const response = await fetch('orders.json');
  //const orders = await response.json();
  //console.log(orders);

  /*const theOrders = orders.map(order => {
    const items = order.items.map(item => new Item(item.item, item.quantity, item.total / item.quantity));
    return new Order(order.customer, order.address, items);
  });*/
  //const theOrders = orders.map(order => Order.fromJSON(order));

  /*theOrders.forEach(order => addOrderToDom(order));

  function addOrderToDom(order) {
    const orderElement = document.createElement('div');
    let html = `
      <h2>order</h2>
      <p>customer: ${order.customer}</p>
      <p>address: ${order.address}</p>
      <p>total: ${order.total}
      <h3>items</h3>
      <ul>
    `;

    order.items.forEach(item => {
      html += `<li>${item.name} ${item.quantity} @ ${item.price}</li>`;
    });

    html += '</ul><hr/>';

    orderElement.innerHTML = html;
    document.body.appendChild(orderElement);
  };*/

  //const orderElement = document.createElement('div');
  //const ordersHtml = theOrders.map(order => order.toHTML());
  //orderElement.innerHTML = ordersHtml.join('<hr/>');
  //document.body.appendChild(orderElement);

  let theOrders;
  const filenameInput = document.querySelector('#filename');
  async function loadOrder() {
    try {
      const response = await fetch(filenameInput.value);
      if (! response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const orders = await response.json();
      return orders.map(order => Order.fromJSON(order));
    } catch(e) {
      console.error(e);
    }
  }

  function displayOrders() {
    const orderElement = document.createElement('div');
    const ordersHtml = theOrders.map(order => order.toHTML());
    orderElement.innerHTML = ordersHtml.join('<hr/>');
    document.body.appendChild(orderElement);
  }

  document.querySelector('#load').addEventListener('click', async () => {
    theOrders = await loadOrder();
    if (theOrders) {
      displayOrders();
    }
  });
}());
