(function () {
  'use strict';

  const searchInput = document.querySelector('#search');
  async function fetchPictures() {
    try {
      const response = await fetch(`json/${searchInput.value}Result.json`);
      if (! response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
    }catch(e) {
      console.error(e);
    }
  }

  document.querySelector('#go').addEventListener('click', async () => {
    await fetchPictures();
  });
}());
