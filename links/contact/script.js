
function fetchData() {
  const jsonFileUrl = 'json.json';

  const ajax = new XMLHttpRequest();
  ajax.open('GET', jsonFileUrl, true);

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        
        data.sort((a, b) => parseInt(a.number) - parseInt(b.number));

        const items = document.querySelector('.items');
        const filterInput = document.querySelector('.filter');

        filterInput.addEventListener('input', filterData);

        function filterData() {
          const filterValue = filterInput.value;
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

        for (let i = 0; i < data.length; i++) {
          items.insertAdjacentHTML(
            'beforeend',
            '<div class="contact">'+
              '<img class="image" src="' + data[i].image + '">'+
              '<p class="name">' + data[i].name + '</p>'+
              '<p class="position">' + data[i].position + '</p>'+
              '<p class="number">' + data[i].number + '</p>'+
            '</div>'
          );
        }
      } else {
        console.error('خطا:', ajax.status, ajax.statusText);
      }
    }
  };

  ajax.send();
}

fetchData();
