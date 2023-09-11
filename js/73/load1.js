/*(function () {
  'use strict';

  const oldOnLoad = onload;

  onload = () => {
    if (oldOnLoad) {
      oldOnLoad();
    }

    document.querySelector('#theButton').addEventListener('click', () => {
      console.log('load1 - button was clicked');
    });
  };
}());*/


document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  document.querySelector('#theButton').addEventListener('click', () => {
    console.log('load1 - button was clicked');
  });
});
