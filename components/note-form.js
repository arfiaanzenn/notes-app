class NoteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="note-form">
                <input type="hidden" id="note-id">
                <input type="text" id="title" placeholder="Judul" required>
                <textarea id="body" placeholder="Isi note (catatan) kamu di sini" required></textarea>
                <button type="submit">Tambahkan Note</button>
            </form>
        `;

        this.querySelector("#note-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const title = this.querySelector("#title").value.trim();
            const body = this.querySelector("#body").value.trim();
            if (title && body) {
                document.dispatchEvent(new CustomEvent("add-note", { detail: { title, body } }));
                this.querySelector("#title").value = "";
                this.querySelector("#body").value = "";
            }
        });
    }
}

customElements.define("note-form", NoteForm);
