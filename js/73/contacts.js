(function () {
  'use strict';

  const contacts = [];

  const contactsTable = document.querySelector('#contactsTable tbody');
  const firstNameInput = document.querySelector('#first');
  const lastNameInput = document.querySelector('#last');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone');
  const contactForm = document.querySelector('#contactForm');

  document.querySelector('#addContact').addEventListener('click', () => {
    contactForm.style.display = 'inline-block';
  });

  contactForm.addEventListener('submit', e => {
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

    firstNameCell.innerText = newContact.first;
    lastNameCell.innerText = newContact.last;
    emailCell.innerText = newContact.email;
    phoneCell.innerText = newContact.phone;

    contactForm.style.display = 'none';

    /*firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';*/
    contactForm.reset();
  });
}());
