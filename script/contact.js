function processData(contact) {

  contact.sort((a, b) => parseInt(a.number) - parseInt(b.number));

  const items = document.querySelector('.items');
  const filterInput = document.querySelector('.filter');

  filterInput.addEventListener('input', filterData);

  function filterData() {
    const filterValue = filterInput.value.trim();
    const contacts = items.querySelectorAll('.card');

    contacts.forEach(contact => {
      const name = contact.querySelector('.name').textContent;
      const number = contact.querySelector('.number').textContent;
      const position = contact.querySelector('.position').textContent;


      if (name.includes(filterValue) || number.includes(filterValue) || position.includes(filterValue)) {
        contact.style.display = 'block';
      } else {
        contact.style.display = 'none';
        if (contacts.length === 0) {
          alert('no');
           }
      }
    });
     

          

  }

  for (let i = 0; i < contact.length; i++) {
    items.insertAdjacentHTML(
      'beforeend',
      '<div class="card">'+
      '<div class="content">'+
      '<div class="contact_image">'+
        '<img class="image" src="' + contact[i].image + '">'+
        '</div>'+
        '<div class="contact_content">'+
        '<p class="name">' + contact[i].name + '</p>'+
        '<p class="position">' + contact[i].position + '</p>'+
        '<p class="number">' + contact[i].number + '</p>'+
        '</div>'+
        '</div>'+
      '</div>'

    );
  }

}

fetchContactData(processData);

function over(){
  document.getElementById("header-content-title").style.color="#15B6D2"
}
function out(){
  document.getElementById("header-content-title").style.color="black"
}