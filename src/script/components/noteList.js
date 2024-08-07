class BlogList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Menambahkan Shadow DOM (optional)
    this._blogList = [];
    this._style = document.createElement("style");
  }

  setBlogList(value) {
    this._blogList = value;
    this.render();
  }

  connectedCallback() {
    console.log("BlogList connected to the DOM");
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
       :host {
        padding: 10px;
        margin: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        box-sizing: border-box;
       }
    `;
  }

  render() {
    console.log("Rendering BlogList");
    this.updateStyle();

    const blogItemElements = this._blogList.map((item) => {
      const blog = document.createElement("blog-item");
      blog.setBlog(item);

      return blog;
    });

    // Mengosongkan konten lama dari elemen BlogList.
    this.shadowRoot.innerHTML = ""; // Menggunakan shadowRoot untuk konten (jika menggunakan Shadow DOM)
    // Menambahkan elemen gaya dan semua elemen blog-item yang dibuat ke dalam elemen BlogList.
    this.shadowRoot.append(this._style, ...blogItemElements);
  }
}

customElements.define("blog-list", BlogList);
