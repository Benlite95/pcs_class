(async function () {
  'use strict';

  function homegrownFetch(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.onloadend = () => {
        if (request.status >= 400) {
          reject(new Error(`${request.status} ${request.statusText}`));
        } else {
          resolve(request.responseText);
        }
      };

      request.onerror = e => reject(new Error(`failed to load: ${e.message}`));

      request.open('GET', url);
      request.send();
    });
  }

  /*homegrownFetch('recipes.json',
    r => console.log(r),
    e => console.error('got error', e));

  homegrownFetch('xrecipes.json',
    r => console.log(r),
    e => console.error('got error', e));*/

  homegrownFetch('recipes.json')
    .then(r => console.log(r))
    .catch(e => console.error(e));

  homegrownFetch('xrecipes.json')
    .then(r => console.log(r))
    .catch(e => console.error(e));

  try {
    const r = await homegrownFetch('recipes.json');
    console.log(r);
  } catch(e) {
    console.error(e);
  }

  try {
    const r = await homegrownFetch('xrecipes.json');
    console.log(r);
  } catch (e) {
    console.error(e);
  }
}());
