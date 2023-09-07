(function () {
  'use strict';

  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(elem, property, value) {
    //elem.style.property = value;
    elem.style[property] = value;
  }

  const colorInput = document.querySelector('#color');
  const bgcolorInput = document.querySelector('#bgcolor');

  /*document.querySelector('#apply').addEventListener('click', () => {
    document.body.style.color = colorInput.value;
    document.body.style.backgroundColor = bgcolorInput.value;
  });*/

  /*document.querySelector('#color')* /get/*('#color').addEventListener('change', function () {
    //document.body.style.color = this.value;
    setCss(document.body, 'color', this.value);
  });*/

  /*document.querySelector('#bgcolor')* /get/*('#bgcolor').addEventListener('input', function () {
    //document.body.style.backgroundColor = this.value;
    setCss(document.body, 'backgroundColor', this.value);
  });*/

  get('#colorForm').addEventListener('submit', e => {
    e.preventDefault();
    setCss(document.body, 'color', colorInput.value);
    setCss(document.body, 'backgroundColor', bgcolorInput.value);
  });
}());
