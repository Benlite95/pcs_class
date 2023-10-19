(function () {
  'use strict';

  const request = new XMLHttpRequest();
  console.log('after create', request.readyState);

  /*request.onreadystatechange = () => {
    console.log('in onreadystatechange', request.readyState);

    if (request.readyState === 4) {
      if (request.status >= 400) {
        console.error('oops', `${request.status} ${request.statusText}`);
      } else {
        console.log('request.responseText:', request.responseText);
      }
    }
  };*/

  request.onloadend = () => {
    if (request.status >= 400) {
      console.error('oops', `${request.status} ${request.statusText}`);
    } else {
      console.log('request.responseText:', request.responseText);
    }
  };

  request.onerror = e => console.error('failed to load', e);

  request.open('GET', 'ajax.js');
  console.log('after open', request.readyState);

  request.send();
  console.log('after send', request.readyState);

  console.log('request.responseText:', request.responseText);

  /*setTimeout(() => {
    console.log('in timeout', request.readyState);
    console.log('request.responseText:', request.responseText);
  }, 2000);*/

  console.log('file end');
}());
