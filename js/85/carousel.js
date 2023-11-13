/* globals $ */
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
      return data;
    }catch(e) {
      console.error(e);
    }
  }

  let pictures;

  const img = $('figure img');
  const caption = $('figcaption');
  let index = 0;
  function showCurrentPicture() {
    //img.attr('src', pictures[index].media.m.replace('https://live.staticflickr.com/65535', 'images').replace('_m', ''));
    img.attr('src', pictures[index].img);
    caption.text(pictures[index].title);
  }

  $('#left').click(() => {
    if(--index < 0) {
      index = pictures.length - 1;
    }
    showCurrentPicture();
  });

  $('#right').click(() => {
    if (++index === pictures.length) {
      index = 0;
    }
    showCurrentPicture();
  });

  document.querySelector('#go').addEventListener('click', async () => {
    const data = await fetchPictures();
    pictures = data.items.map(picture => {
      return {
        title: picture.title,
        img: picture.media.m.replace('https://live.staticflickr.com/65535', 'images').replace('_m', '')
      };
    });
    /*data.items.forEach(item => {
      $('body').append(`
        <figure>
          <img src="${item.media.m.replace('https://live.staticflickr.com/65535', 'images').replace('_m', '')}"/>
          <figcaption>${item.title}</figcaption>
        </figure>`);
    });*/

    showCurrentPicture();
  });
}());
