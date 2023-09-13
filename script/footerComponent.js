class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <p class="footer-title">Copyright © 2023 <a style="text-decoration: none; color: white" target="_blank" href="https://hyperyek.com/">Hyperyek</a> Co</p>
    </footer>

        `;
    }
}

customElements.define('footer-component', footer);