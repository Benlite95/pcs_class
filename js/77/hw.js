/* global $*/
(function () {
  'use strict';

  //const nameInput = $('#name');
  const addressInput = $('#address');
  //const nameResult = $('#nameResult');
  const addressResult = $('#addressResult');

  const theForm = $('#theForm');
  // theForm.submit(e => {
  theForm.on('submit', e => {
    e.preventDefault();

    //nameResult.text(`name is ${nameInput.val()}`);
    $('#nameResult').text(`name is ${$('#name').val()}`);
    addressResult.text(`address is ${addressInput.val()}`);
  });

  const theTermsCheckbox = $('#terms');
  theTermsCheckbox.change(() => {
    console.log('terms clicked', theTermsCheckbox.prop('checked'));
    $('#theForm button').prop('disabled', !theTermsCheckbox.prop('checked'));

    // console.log('terms clicked', this, this.checked);
    // $('#theForm button').prop('disabled', !this.checked);
  });

  // const theInputs = $('input');

  // theForm.append('<input placeholder="Im the new input">');

  /*theInputs
    .css('border-color', 'red')
    .click(() => {
      console.log('input was clicked');
    });*/

  /*theForm.on('click', 'input', () => {
    console.log('input was clicked');
  });*/
}());
