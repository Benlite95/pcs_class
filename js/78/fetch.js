console.log('file start');

(async function () {
  'use strict';

  console.log('before fetch 1');

  let theResponse;
  fetch('people.json')
    .then(response => {
      theResponse = response;
      if (response.status >= 400) {
        // console.error('oops', `${response.status} ${response.statusText}`);
        throw new Error(`oops, failed to load: ${response.status} ${response.statusText}`);
      }
      //return response.text();
      return response.json();
    })
    .then(data => {
      // console.log(data);
      console.log(data, typeof data, theResponse.status);

      /*const people = JSON.parse(data);
      console.log(people, typeof people);

      people.forEach(p => console.log(p));*/
    })
    .catch(e => console.error('oops', e));

  console.log('after fetch 1');

  /////////////////////////////////

  console.log('before fetch 2');

  try {
    const response = await fetch('people.json');
    if (response.status >= 400) {
      throw new Error(`oops, failed to load: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data, typeof data, response.status);
  } catch(e) {
    console.error('oops', e)
  }

  console.log('after fetch 2');
}());

console.log('file end');
