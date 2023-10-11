import { contactMain } from "../../views/contact";
import { landingMain } from "../../views/landing";
import { error } from "../../views/error";
import { documentMain } from "../../views/documents";

class contentComponent extends HTMLElement {
  connectedCallback() {}
}
export function content() {
  if (!customElements.get("content-component")) {
    customElements.define("content-component", contentComponent);
  }
  return "content-component";
}

const pathname = window.location.pathname;
if (pathname == "/" || pathname == "/landing") {
  landingMain();
} else if (pathname == "/contact") {
  contactMain();
} else if (pathname == "/documents") {
  documentMain();
} else {
  error();
}
