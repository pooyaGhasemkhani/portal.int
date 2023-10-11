import { getProvider } from "./provider";
function getContactData() {
  return getProvider("../constants/jsons/contact/contact.json")
    .then(function (contactData) {
      return contactData;
    })
    .catch(function (error) {
      alert("Error:" + error);
    });
}

export default getContactData;
