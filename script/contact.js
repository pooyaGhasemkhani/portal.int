function processData(contact) {

  contact.sort((a, b) => parseInt(a.number) - parseInt(b.number));

  const items = document.querySelector('.items');
  const filterInput = document.querySelector('.filter');
  filterInput.focus()

  function filter(){
    filterInput.value = ""
  }
  filter()

  filterInput.addEventListener('input', filterData);

  let searchResultDisplay = false; 

  function filterData() {
    const filterValue = filterInput.value.trim();
    const contacts = items.querySelectorAll('.card');
    let noneCount = 0;
  
    contacts.forEach(contact => {
      const name = contact.querySelector('.name').textContent;
      const number = contact.querySelector('.number').textContent;
      const position = contact.querySelector('.position').textContent;
      const email = contact.querySelector('.email').textContent;
  
      if (name.includes(filterValue) || number.includes(filterValue) || position.includes(filterValue) || email.includes(filterValue)) {
        contact.style.display = 'block';
      } else {
        contact.style.display = 'none';
        noneCount++;
      }
    });
  
    if (noneCount === contacts.length) {
      if (!searchResultDisplay) { 
        items.insertAdjacentHTML(
          'beforeend', `
          <div class="search-result">
          <div class="search-result-content">
          <p>همکاری با مشخصات جستجو شده یافت نشد</p>
          </div>
          </div>
          `
        );
        searchResultDisplay = true; 
      } else {
        const searchResult = items.querySelector('.search-result');
        searchResult.style.display = 'flex'; 
      }
    } else {
      if (searchResultDisplay) {
        const searchResult = items.querySelector('.search-result');
        searchResult.style.display = 'none'; 
      }
    }
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
        '<p class="number">' + contact[i].number + ' <i class="fa-solid fa-phone-volume fa-rotate-270"></i></p>'+
        '<a class="email" href="mailto:'+ contact[i].email +'">'+ contact[i].email +' <i class="fa-solid fa-envelope"></i></a>'+
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




