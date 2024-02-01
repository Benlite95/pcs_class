'use strict';

const EventEmitter = require('events').EventEmitter;

const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(12);

////////

eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));
eventEmitter.on('coffeeBrewed', () => console.log('Coffee was brewed'));

///////

setInterval(() => {
  eventEmitter.emit('coffeeBrewed');
}, 1000);
