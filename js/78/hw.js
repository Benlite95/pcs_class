/* globals $*/
(function () {
  'use strict';

  $('#evens').click(() => {
    //$('p:nth-child(even)').css('color', 'yellow');
    //$('p:nth-child(odd)').css('color', 'green');

    $('p').removeClass('highlight');
    $('p:nth-child(even)').addClass('highlight');
    //$('p:nth-child(odd)').removeClass('highlight');
  });

  $('#odds').click(() => {
    //$('p:nth-child(odd)').css('color', 'yellow');
    //$('p:nth-child(even)').css('color', 'green');

    $('p:nth-child(odd)').addClass('highlight');
    $('p:nth-child(even)').removeClass('highlight');
  });
}());
