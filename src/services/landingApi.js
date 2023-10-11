import { getProvider } from "./provider";
export function getLandingData() {
  return getProvider("../constants/jsons/landing/landing.json")
    .then(function (landingData) {
      return landingData;
    })
    .catch(function (error) {
      alert("Error:", error);
    });
}

export default getLandingData;
