(function () {
  'use strict';

  for (let i = 0; i < 5; i++) {
    window.app.theCounter.increment();
  }

  const counterA = window.app.counterCreator();
  const counterB = window.app.counterCreator();

  //const counterA = window.app.counterCreator.create();
  //const counterB = window.app.counterCreator.create();

  for (let i = 0; i < 10; i++) {
    counterA.increment();
  }

  for (let i = 0; i < 15; i++) {
    counterB.increment();
  }

  console.log(window.app.theCounter.getCurrentCount(), counterA.getCurrentCount(), counterB.getCurrentCount());

  console.log(counterA.getNumberOfCounters(), counterB.getNumberOfCounters());
  //console.log(window.app.counterCreator.getNumberOfCounters());
}());
