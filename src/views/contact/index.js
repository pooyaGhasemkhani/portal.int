import "../../styles/conatct/contact.scss";
import getContactData from "../../services/contactApi";

document.querySelector("title").innerText = "contact";

export async function contactMain() {
  try {
    const contactData = await getContactData();

    const items = document.createElement("div");
    items.className = "items";

    var searchItems = document.createElement("div");
    searchItems.className = "search";
    items.appendChild(searchItems);

    const contentComponent = document.querySelector(".contect-class");

    contentComponent.appendChild(items);

    var input = document.createElement("input");
    input.className = "filter";
    input.setAttribute("placeholder", "جستجو بر اساس تمامی اطلاعات");
    var search = document.querySelector(".search");
    search.appendChild(input);
    const filterInput = document.querySelector(".filter");
    filterInput.focus();

    function filter() {
      filterInput.value = "";
    }
    filter();

    filterInput.addEventListener("input", filterData);

    let searchResultDisplay = false;

    function filterData() {
      const filterValue = filterInput.value.trim();
      const contacts = items.querySelectorAll(".card");
      let noneCount = 0;

      contacts.forEach((contact) => {
        const name = contact.querySelector(".name").textContent;
        const number = contact.querySelector(".number").textContent;
        const position = contact.querySelector(".position").textContent;
        const email = contact.querySelector(".email").textContent;

        if (
          name.includes(filterValue) ||
          number.includes(filterValue) ||
          position.includes(filterValue) ||
          email.includes(filterValue)
        ) {
          contact.style.display = "block";
        } else {
          contact.style.display = "none";
          noneCount++;
        }
      });

      if (noneCount === contacts.length) {
        if (!searchResultDisplay) {
          items.insertAdjacentHTML(
            "beforeend",
            `
              <div class="search-result">
              <div class="search-result-content">
              <p>همکاری با مشخصات جستجو شده یافت نشد</p>
              </div>
              </div>
              `
          );
          searchResultDisplay = true;
        } else {
          const searchResult = items.querySelector(".search-result");
          searchResult.style.display = "flex";
        }
      } else {
        if (searchResultDisplay) {
          const searchResult = items.querySelector(".search-result");
          searchResult.style.display = "none";
        }
      }
    }

    for (let i = 0; i < contactData.length; i++) {
      items.insertAdjacentHTML(
        "beforeend",
        '<div class="card">' +
          '<div class="content">' +
          '<div class="contact_image">' +
          '<img class="image" src="' +
          contactData[i].image +
          '">' +
          "</div>" +
          '<div class="contact_content">' +
          '<p class="name">' +
          contactData[i].name +
          "</p>" +
          '<p class="position">' +
          contactData[i].position +
          "</p>" +
          '<p class="number">' +
          contactData[i].number +
          ' <i class="fa-solid fa-phone-volume fa-rotate-270"></i></p>' +
          '<a class="email" href="mailto:' +
          contactData[i].email +
          '">' +
          contactData[i].email +
          ' <i class="fa-solid fa-envelope"></i></a>' +
          "</div>" +
          "</div>" +
          "</div>"
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
  var headerContentTitle = document.querySelector(".header-content-title");
  headerContentTitle.textContent = "دفترچه تلفن";
}
