/*globals $*/
(function () {
  'use strict';

  let contacts = [];

  const contactsTable = $('#contactsTable tbody');
  const firstNameInput = $('#first');
  const lastNameInput = $('#last');
  const emailInput = $('#email');
  const phoneInput = $('#phone');
  const contactForm = $('#contactForm');

  $('#addContact').click(() => {
    contactForm.slideDown('fast');
  });

  contactForm.submit(e => {
    e.preventDefault();

    if (!contacts.length) {
      contactsTable.empty();
    }

    const newContact = {
      first: firstNameInput.val(),
      last: lastNameInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };

    contacts.push(newContact);

    /*contactsTable.append(`
      <tr>
        <td>${newContact.first}</td>
        <td>${newContact.last}</td>
        <td>${newContact.email}</td>
        <td>${newContact.phone}</td>
        <td><button>delete</button></td>
      </tr>
    `)
    .find('button')
    .click(() => {
      console.log('delete clicked. Would delete', newContact.first);
    });*/

    const row = $(`<tr>
        <td>${newContact.first}</td>
        <td>${newContact.last}</td>
        <td>${newContact.email}</td>
        <td>${newContact.phone}</td>
        <td><button>delete</button></td>
      </tr>`)
      .appendTo(contactsTable);

    row.find('button')
      .click(() => {
        row.remove();
        contacts = contacts.filter(c => c !== newContact);
        if (!contacts.length) {
          contactsTable.append('<tr><td colspan="5">no contacts loaded</td><tr>');
        }
      });

    hideContactForm();
  });

  function hideContactForm() {
    contactForm.slideUp('slow');

    // contactForm[0].reset();
    contactForm.trigger('reset');
  }

  document.querySelector('#cancel').addEventListener('click', () => {
    hideContactForm();
  });
}());
