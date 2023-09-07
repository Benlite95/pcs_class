(function () {
  'use strict';

  const clickHandler = function(e) {
    e.stopPropagation();
    const newButton = document.createElement('button');
    newButton.innerText = `${++buttonNumber}`;
    newButton.addEventListener('click', clickHandler);

    document.body.appendChild(newButton);
  };

  let buttonNumber = 1;
  const buttonOne = document.querySelector('#one');
  buttonOne.addEventListener('click', clickHandler);

  //let buttonNumber = 1;
  const theDiv = document.querySelector('#theDiv');
  theDiv.style.display = 'inline-block';
  theDiv.addEventListener('click', e => {
    console.log(e);
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    const newButton = document.createElement('button');
    newButton.innerText = `${++buttonNumber}`;
    theDiv.appendChild(newButton);

    /*switch(e.target.innerText) {
      case '1':
        console.log('do one stuff');
        break;
      case '2':
        console.log('do two stuff');
        break;
      default:
        console.log('do other stuff');
    }*/

    console.log(`would load email #${e.target.innerText}`);
  });


}());
