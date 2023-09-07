(function () {
  'use strict';

  let licenseAccepted = false;

  const licenseButton = document.querySelector('#license');
  licenseButton.addEventListener('click', function (e) {
    licenseAccepted = true;
    /*licenseButton.*//*this*/e.target.disabled = true;
  });

  document.querySelector('#theLink').addEventListener('click', e => {
    console.log('anchor clicked');
    if (!licenseAccepted) {
      e.preventDefault();
    }
  });
}());
