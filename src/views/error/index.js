import "../../styles/error/error.scss";

import { header } from "../../components/header";
export async function error() {
  document.querySelector("title").innerText = "صفحه یافت نشد";

  await header();
  const contentComponent = document.querySelector(".contect-class");
  const items = document.createElement("div");
  items.className = "items";
  items.setAttribute("id", "items");
  contentComponent.appendChild(items);
  items.insertAdjacentHTML(
    "beforeend",
    `
        <div class="error-result">
        <img src="../../assets/images/error/404.jpg">
        <a href="./"><button class="button" role="button">بازگشت به صفحه اصلی</button></a>
        </div>
        `
  );

  var headerContentTitle = document.querySelector(".header-content-title");
  headerContentTitle.textContent = "صفحه یافت نشد";
}
