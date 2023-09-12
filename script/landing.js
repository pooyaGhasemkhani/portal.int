function processData(landing) {
  for (let i = 0; i < landing.length; i++) {
    let items = document.querySelector('.items');
    items.insertAdjacentHTML(
      'beforeend', '<a style="text-decoration: none;" target="_blank" href="' + landing[i].link + '">' +
      '<div class="items_card">' +
      '<img class="items_card_image" src="' + landing[i].image + '">' +
      '<div class="items_card_title">' + '<p>' + landing[i].name + '</p>' + '</div>' +
      '</div>'
    );
  }
  const snappCard = document.createElement('snapp-card');
  document.querySelector('.items').appendChild(snappCard);
}

fetchLandingData(processData);





function over(){
  document.getElementById("header-content-title").style.color="#15B6D2"
}
function out(){
  document.getElementById("header-content-title").style.color="black"
}




function openSnappPopup() {
  const snappPopup = document.getElementById('snapp-popup');
  
  snappPopup.style.display = 'block';
}




function closeSnappPopupButton(){
  const popup = document.getElementById('snapp-popup');
  popup.style.display = 'none';
};