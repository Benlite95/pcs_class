(function () {
  'use strict';

  // silly helper functions
  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(elem, property, value) {
    elem.style[property] = value;
  }

  function handleEvent(elem, type, callback) {
    //elem.addEventListener(type, callback);

    /* browser sniffing
    if (navigator.userAgent.indexOf('chrome')) {
      elem.addEventListener(type, callback);
    } else if (navigator.userAgent.indexOf('ie')) {
      elem.attachEvent(type, callback);
    }*/

    // feature detection
    if(elem.addEventListener) {
      elem.addEventListener(type, callback);
    } else if(elem.attachEvent) {
      elem.attachEvent(type, callback);
    } else {
      console.log('I give up');
    }
  }

  let contacts = [];

  const contactsTable = get('#contactsTable tbody');
  const firstNameInput = get('#first');
  const lastNameInput = get('#last');
  const emailInput = get('#email');
  const phoneInput = get('#phone');
  const contactForm = get('#contactForm');

  handleEvent(get('#addContact'), 'click', () => {
    setCss(contactForm, 'display', 'inline-block');
  });

  handleEvent(contactForm, 'submit', e => {
    e.preventDefault();

    if (!contacts.length) {
      contactsTable.deleteRow(0);
    }
    /*contactsTable.innerHTML = `
      <tr>
        <td>Joe</td>
        <td>Biden</td>
        <td>jbiden@whitehouse.gov</td>
        <td>1234567890</td>
      </tr>
    `;*/

    //const row = document.createElement('tr');

    const newContact = {
      first: firstNameInput.value,
      last: lastNameInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    };

    contacts.push(newContact);

    const row = contactsTable.insertRow();
    const firstNameCell = row.insertCell();
    const lastNameCell = row.insertCell();
    const emailCell = row.insertCell();
    const phoneCell = row.insertCell();
    const deleteCell = row.insertCell();

    firstNameCell.innerText = newContact.first;
    lastNameCell.innerText = newContact.last;
    emailCell.innerText = newContact.email;
    phoneCell.innerText = newContact.phone;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteCell.appendChild(deleteButton);

    handleEvent(deleteButton, 'click', () => {
      row.remove();
      contacts = contacts.filter(c => c !== newContact);
      if (!contacts.length) {
        const row = contactsTable.insertRow();
        row.innerHTML = '<td colspan="5">no contacts loaded</td>';
      }
    });

    hideContactForm();
  });

  function hideContactForm() {
    setCss(contactForm, 'display', 'none');
    contactForm.reset();
  }

  handleEvent(get('#cancel'), 'click', () => {
    hideContactForm();
  });
}());
