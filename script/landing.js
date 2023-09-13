function processData(landing) {
  for (let i = 0; i < landing.length; i++) {
    let items = document.querySelector('.items');
    items.insertAdjacentHTML(
      'beforeend', '<a style="text-decoration: none; display: contents;" target="_blank" href="' + landing[i].link + '">' +
      '<div class="items_card">' +
      '<img class="items_card_image" src="' + landing[i].image + '">' +
      '<div class="items_card_title">' + 
      '<div class="fon-icons">'+ landing[i].icons +'</div>' +
       '<div class="items_card_name">' + '<p>' + landing[i].name + '</p>' + '</div>' +
        '</div>' +
      '</div>' +
      '</a>'
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


// if(window.navigator.userAgent.includes("Android")){
//   alert("android")
// } else if(window.navigator.userAgent.includes("Windows")){
//   alert("windows")
// } else if(window.navigator.userAgent.includes("Ios")){
//   alert("ios")
// } else if(window.navigator.userAgent.includes("Mac")){
//   alert("mac")
// } else if(window.navigator.userAgent.includes("Linux")){
//   alert("linux")
// }