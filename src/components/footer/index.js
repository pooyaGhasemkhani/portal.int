import "../../styles/footer/footer.scss";
class footerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="footer">
        <p class="footer-title">Copyright © 2023 <a style="text-decoration: none; color: white" target="_blank" href="https://hyperyek.com/">Hyperyek</a> Co</p>
    </footer>

        `;
  }
}
export function footer() {
  if (!customElements.get("footer-component")) {
    customElements.define("footer-component", footerComponent);
  }
  return "footer-component";
}
