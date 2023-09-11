class contactHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="nav">
        <div class="header">
        <div class="header-content">
            <a onmouseover="over()" onmouseout="out()" class="portal-link" href="./index.html">
                <div  class="header-content-link">
            <div class="header-content-image">
            <img class="header-content-image-file" src="../../images/landing/header-logo.png" alt="">
             </div>
            <b id="header-content-title" class="header-content-title">دفترچه تلفن</b>
        </div>
             </a>
             
        </div>
      </div> 
    </nav>


        `;
    }
}

customElements.define('header-component', contactHeader);