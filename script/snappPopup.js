function openSnappPopup() {
    const snappPopup = document.getElementById('snapp-popup');
    
    snappPopup.style.display = 'block';
  }

  const openSnappPopupElement = document.getElementById('open-snapp-popup');
  openSnappPopupElement.addEventListener('click', function () {
    openSnappPopup();
  });
  

  const closeSnappPopupButton = document.getElementById('close-snapp-popup');
  closeSnappPopupButton.addEventListener('click', function () {
    const popup = document.getElementById('snapp-popup');
    popup.style.display = 'none';
  });