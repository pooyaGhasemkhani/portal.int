import "../../styles/document/document.scss";
import getDocumentData from "../../services/documentApi";

document.querySelector("title").innerText = "document manager";

export async function documentMain() {
  try {
    const documentData = await getDocumentData();
    function createDOMElement(className) {
      const element = document.createElement("div");
      element.className = className;
      return element;
    }

    const menu = createDOMElement("menu");
    const cards = createDOMElement("cards");
    const nav = createDOMElement("navbar");
    const ul = createDOMElement("navbar__menu");

    menu.appendChild(nav);
    nav.appendChild(ul);

    function openDocument(documentName) {
      var i;
      var x = document.getElementsByClassName("cards-content");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(documentName).style.display = "flex";
    }

    for (let i = 0; i < documentData.length; i++) {
      var li = document.createElement("li");
      li.className = "navbar__item navbar__link";
      li.innerText = documentData[i].name;
      li.addEventListener("click", function () {
        openDocument(documentData[i].id);
      });
      ul.appendChild(li);

      var tooltip = document.createElement("span");
      tooltip.innerText = documentData[i].name;
      li.appendChild(tooltip);

      var content = document.createElement("div");
      content.className = "cards-content";
      content.setAttribute("id", documentData[i].id);
      content.style.display = "none";
      cards.appendChild(content);

      var cardLoop = documentData[i].cards;
      for (let a = 0; a < cardLoop.length; a++) {
        content.insertAdjacentHTML(
          "beforeend",
          '<a style="text-decoration: none; display: contents;" target="_blank" href="' +
            cardLoop[a].link +
            '">' +
            '<div class="document_card">' +
            '<img class="document_card_image" src="' +
            cardLoop[a].image +
            '">' +
            '<div class="document_card_name">' +
            "<p>" +
            cardLoop[a].cardName +
            "</p>" +
            "</div>" +
            "</div>" +
            "</a>"
        );
      }
    }
    const contentComponent = document.querySelector(".contect-class");

    const items = document.createElement("div");
    items.className = "documents";
    contentComponent.appendChild(items);

    items.appendChild(menu);
    items.appendChild(cards);
  } catch (err) {
    console.log(err);
  }

  var headerContentTitle = document.querySelector(".header-content-title");
  headerContentTitle.textContent = "مدیریت محتوا";
}
