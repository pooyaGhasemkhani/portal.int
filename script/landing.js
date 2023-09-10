function processData(landing) {

  for (let i = 0; i < landing.length; i++) {
    let items = document.querySelector('.items');
    items.insertAdjacentHTML(
      'beforeend',  '<a style="text-decoration: none;" target="_blank" href="'+landing[i].link+'">' + '<div class="items_card">' +
      '<img class="items_card_image" src="'+landing[i].image+'">'+
      '<div class="items_card_title">'+'<p>'+ landing[i].name +'</p>' + '</div>'+
      '</div>'

    );
  } 
}

fetchLandingData(processData);
