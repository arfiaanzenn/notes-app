class FooterBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer><p>📖 Notes App &copy; Dicoding Fundamental Front-End Dev Course</p></footer>`;
    }
}
customElements.define("footer-bar", FooterBar);
