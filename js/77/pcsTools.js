window.pcs = (function () {
  'use strict';

  function setCss(elem, property, value) {
    elem.style[property] = value;
  }

  function getCss(elem, property) {
    //return elem.style[property];
    return getComputedStyle(elem)[property];
  }

  function on(elem, type, callback) {
    elem.addEventListener(type, callback);
  }

  function getColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getColorPart();
    const g = getColorPart();
    const b = getColorPart();
    return `rgb(${r}, ${g}, ${b})`;
  }

  const speeds = {
    fast: 100,
    medium: 500,
    slow: 1000
  };

  function getSpeed(speed) {
    if (typeof speed === 'number') {
      return speed;
    }
    return speeds[speed] || speeds['medium'];
  }

  //const data = {};

  return function (selector) {
    const elem = document.querySelector(selector);

    //const elemData = data[selector] = data[selector] || {};
    const elemData = elem.data = elem.data || {};
    // const data = {};

    return {
      css: function (property, value) {
        if (arguments.length === 2) {
          setCss(elem, property, value);
          return this;
        } else {
          return getCss(elem, property);
        }
      },
      on: function (type, callback) {
        on(elem, type, callback);
        return this;
      },
      hide: function () {
        setCss(elem, 'display', 'none');
        return this;
      },
      show: function () {
        setCss(elem, 'display', 'block');
        return this;
      },
      click: function (callback) {
        on(elem, 'click', callback);
        return this;
      },
      flash: function (duration, speed) {
        const originalColor = getCss(elem, 'color');

        const interval = setInterval(() => {
          setCss(elem, 'color', getRandomColor());
        }, /*speeds[speed]*/ getSpeed(speed));

        setTimeout(() => {
          clearInterval(interval);
          setCss(elem, 'color', originalColor);
        }, duration);
        return this;
      },
      data: function (key, value) {
        if (arguments.length === 2) {
          //data[key] = value;
          //elem[key] = value;
          elemData[key] = value;
          return this;
        } else {
          //return data[key];
          //return elem[key];
          return elemData[key];
        }
      }
    };
  };
}());
