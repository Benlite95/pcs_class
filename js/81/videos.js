/* global $*/
(function () {
  'use strict';

  const videoList = $('#sidebar ul');
  const theVideoElem = $('#theVideo');

  async function loadVideos() {
    try {
      const response = await fetch('videos.json');
      if (! response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch(e) {
      console.error(e);
    }
  }

  //let theActiveOne;
  async function displayVideoList() {
    const theVideos = await loadVideos();
    theVideos.forEach(video => {
      /*videoList.append(`<li>
                          <span>${video.name}</span>
                          <img src="media/${video.picture || 'video.png'}" />
                        </li>`);*/

      const theLi = $(`<li>
          <span>${video.name}</span>
          <img src="media/${video.picture || 'video.png'}" />
        </li>`)
        .appendTo(videoList)
        .click(function () {
          theVideoElem.attr('src', video.url);
          //theVideoElem[0].play();
          //theVideoElem.trigger('play');

          //theActiveOne?.css('border-color', 'black');

          //this.style = 'color: gray; border-color: red;';
          //theLi.css('color', 'gray');
          //theLi.css('border-color', 'red');
          /*theLi.css({
            color: 'gray',
            borderColor: 'red'
          });*/

          $('.active').removeClass('active');

          theLi.addClass('visited active');

          //theActiveOne = theLi;
        });
    });

    $('#loading').hide();
    $('.loaded').show();
  }

  displayVideoList();
}());
