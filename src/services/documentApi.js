import { getProvider } from "./provider";
export function getDocumentData() {
  return getProvider("../constants/jsons/documents/items.json")
    .then(function (documentData) {
      return documentData;
    })
    .catch(function (error) {
      alert("Error:", error);
    });
}

export default getDocumentData;
