(function () {
  'use strict';

  let contacts = [];

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
    const deleteCell = row.insertCell();

    firstNameCell.innerText = newContact.first;
    lastNameCell.innerText = newContact.last;
    emailCell.innerText = newContact.email;
    phoneCell.innerText = newContact.phone;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
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
    contactForm.style.display = 'none';
    contactForm.reset();
  }

  document.querySelector('#cancel').addEventListener('click', () => {
    hideContactForm();
  });
}());
