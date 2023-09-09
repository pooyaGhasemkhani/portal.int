function processData(landing) {

  for (let i = 0; i < landing.length; i++) {
    let items = document.querySelector('.items');
    items.insertAdjacentHTML(
      'beforeend', '<div class="item">' 
      + '<div class="content">' + '<h2>' + landing[i].name + '</h2>' + '</div>'
      + '<a target="_blank" href="' + landing[i].link + '">' 
      + '<img class="image" src="' + landing[i].image + '">'  
      + '</a>'
      + '</div>'
    );
  }  console.log('دریافت شده:', landing);
}

fetchLandingData(processData);












