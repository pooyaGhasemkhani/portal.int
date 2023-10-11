import "../../styles/header/header.scss";
class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav class="nav">
                <div class="header">
                    <div class="header-content">
                        <a class="portal-link" href="./">
                            <div class="header-content-link">
                                <div class="header-content-image">
                                    <img class="header-content-image-file" src="../../assets/images/landing/header-logo.png" alt="">
                                </div>
                                <b id="header-content-title" class="header-content-title"></b>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        `;

    // const title = this.getAttribute("title");
    const headerContentTitle = this.querySelector("#header-content-title");
    // headerContentTitle.textContent = title;

    headerContentTitle.addEventListener(
      "mouseover",
      this.handleMouseOver.bind(this)
    );
    headerContentTitle.addEventListener(
      "mouseout",
      this.handleMouseOut.bind(this)
    );
  }

  handleMouseOver() {
    this.querySelector("#header-content-title").style.color = "#15B6D2";
  }

  handleMouseOut() {
    this.querySelector("#header-content-title").style.color = "black";
  }
}
export function header() {
  if (!customElements.get("header-component")) {
    customElements.define("header-component", HeaderComponent);
  }
  return "header-component";
}
