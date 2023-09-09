function fetchLandingData(callback) {
    const jsonLandingUrl = '../jsons/landing/landing.json';
  
    const ajaxLanding = new XMLHttpRequest();
    ajaxLanding.open('GET', jsonLandingUrl, true);
  
    ajaxLanding.onreadystatechange = function () {
      if (ajaxLanding.readyState === 4) {
        if (ajaxLanding.status === 200) {
          const landing = JSON.parse(ajaxLanding.responseText);
  
          callback(landing);
        } else {
          console.error('Error:', ajaxLanding.status, ajaxLanding.statusText);
        }
      }
    };
  
    ajaxLanding.send();
  }
  
  function fetchContactData(callback) {
    const jsonContactUrl = '../../jsons/contact/contact.json';
  
    const ajaxContact = new XMLHttpRequest();
    ajaxContact.open('GET', jsonContactUrl, true);
  
    ajaxContact.onreadystatechange = function () {
      if (ajaxContact.readyState === 4) {
        if (ajaxContact.status === 200) {
          const contact = JSON.parse(ajaxContact.responseText);
  
          callback(contact);
        } else {
          console.error('Error:', ajaxContact.status, ajaxContact.statusText);
        }
      }
    };
  
    ajaxContact.send();
  }
  