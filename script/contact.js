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
      '<div class="contact_image">'+
        '<img class="image" src="' + contact[i].image + '">'+
        '</div>'+
        '<div class="contact_content">'+
        '<h3 class="name">' + contact[i].name + '</h3>'+
        '<h3 class="position">' + contact[i].position + '</h3>'+
        '<h3 class="number">' + contact[i].number + '</h3>'+
        '</div>'+
      '</div>'

    );
  }

}

fetchContactData(processData);