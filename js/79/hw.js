/* global $, pcs*/
(function () {
  'use strict';

  const nameInput = $('#name');
  const resultsElem = $('#results');
  const results2Elem = $('#results2');
  const spinner = $('#loading');

  /*$('#load').click(async () => {
    spinner.show();
    resultsElem.text('');
    try {
      const response = await fetch(nameInput.val());
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const text = await response.text();
      resultsElem.text(text);
      results2Elem.html(text);
      // spinner.hide();
    } catch (e) {
      pcs.messageBox(e.message);
      // spinner.hide();
    } finally {
      spinner.hide();
    }
  });*/

  $('#load').click(() => {
    spinner.show();
    resultsElem.text('');

    fetch(nameInput.val())
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => resultsElem.text(text))
      .catch(e => pcs.messageBox(e.message))
      .finally(() => spinner.hide());
  });

}());
