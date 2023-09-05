function fetchData() {
  const jsonFileUrl = 'json.json';

  const ajax = new XMLHttpRequest();
  ajax.open('GET', jsonFileUrl, true);

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);

        for (let i = 0; i < data.length; i++) {
          let items = document.querySelector('.items');
          items.insertAdjacentHTML(
            'beforeend',
            '<a target="_blank" href="' + data[i].link + '">' + '<img class="image" src="' + data[i].image + '">' + '</a>'
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
