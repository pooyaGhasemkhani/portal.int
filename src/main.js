import "./styles/main.scss";

import { header } from "./components/header";
import { content } from "./components/content";
import { footer } from "./components/footer";

const components = {
  header: {
    elem: header(),
    class: "header-class",
  },
  content: {
    elem: content(),
    class: "contect-class",
  },
  footer: {
    elem: footer(),
    class: "footer-class",
  },
};

var app = document.querySelector(".app");
for (let key of Object.keys(components)) {
  const ComponentElem = document.createElement(components[key].elem);
  ComponentElem.className = components[key].class;
  app.appendChild(ComponentElem);
}
