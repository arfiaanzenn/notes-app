class NoteItem extends HTMLElement {
    static get observedAttributes() {
        return ["title", "body", "date"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="note">
                <h2>${this.getAttribute("title")}</h2>
                <pre>${this.getAttribute("body")}</pre>
                <small>Created on: ${this.getAttribute("date")}</small>
            </div>
        `;
    }
}
customElements.define("note-item", NoteItem);
