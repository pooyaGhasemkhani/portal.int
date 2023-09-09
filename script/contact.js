function processData(contact) {

  contact.sort((a, b) => parseInt(a.number) - parseInt(b.number));

  const items = document.querySelector('.items');
  const filterInput = document.querySelector('.filter');

  filterInput.addEventListener('input', filterData);

  function filterData() {
    const filterValue = filterInput.value.trim();
    const contacts = items.querySelectorAll('.contact');

    contacts.forEach(contact => {
      const name = contact.querySelector('.name').textContent;
      const number = contact.querySelector('.number').textContent;
      const position = contact.querySelector('.position').textContent;


      if (name.includes(filterValue) || number.includes(filterValue) || position.includes(filterValue)) {
        contact.style.display = 'block';
      } else {
        contact.style.display = 'none';
      }
    });
  }

  for (let i = 0; i < contact.length; i++) {
    items.insertAdjacentHTML(
      'beforeend',
      '<div class="contact">'+
        '<img class="image" src="' + contact[i].image + '">'+
        '<p class="name">' + contact[i].name + '</p>'+
        '<p class="position">' + contact[i].position + '</p>'+
        '<p class="number">' + contact[i].number + '</p>'+
      '</div>'
    );
  }

}

fetchContactData(processData);