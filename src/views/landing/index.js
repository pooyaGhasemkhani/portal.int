import "../../styles/landing/landing.scss";
import getLandingData from "../../services/landingApi";
import { snappPopup } from "../../components/snappPopup";
export async function landingMain() {
  document.querySelector("title").innerText = "portal";

  try {
    const landingData = await getLandingData();

    const contentComponent = document.querySelector(".contect-class");
    const items = document.createElement("div");
    items.className = "landing";
    items.setAttribute("id", "items");
    contentComponent.appendChild(items);

    for (let i = 0; i < landingData.length; i++) {
      items.insertAdjacentHTML(
        "beforeend",
        '<a style="text-decoration: none; display: contents;" target="_blank" href="' +
          landingData[i].link +
          '">' +
          '<div class="landing_card">' +
          '<img class="landing_card_image" src="' +
          landingData[i].image +
          '">' +
          '<div class="landing_card_title">' +
          '<div class="fon-icons">' +
          landingData[i].icons +
          "</div>" +
          '<div class="landing_card_name">' +
          "<p>" +
          landingData[i].name +
          "</p>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</a>"
      );
    }
    const snappCard = document.createElement("snapp-card");
    document.querySelector(".landing").appendChild(snappCard);
  } catch (error) {
    console.error("Error:", error);
  }
  var headerContentTitle = document.querySelector(".header-content-title");
  headerContentTitle.textContent = "ابزارهای سازمانی";
}
