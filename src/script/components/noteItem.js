class BlogItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this._blog = {
      id: 0,
      title: "NEED_TITLE",
      body: "",
      createdAt: "",
      archived: false,
    };
    this._style = document.createElement("style");
    this.render();
  }

  setBlog(value) {
    console.log("Setting blog data:", value);
    this._blog["id"] = value.id;
    this._blog["title"] = value.title;
    this._blog["body"] = value.body;
    this._blog["createdAt"] = value.createdAt;
    this._blog["archived"] = value.archived;

    // Render ulang setelah blog diupdate
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
      :host {
        background: orange; /* atau warna default yang diinginkan */
        padding: 20px;
        margin: 10px;
        border-radius: 7px;
        font-size: 14px;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "slnt"0;
        overflow: initial;
        line-height: 1.5;
        gap: 10px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        min-width: 250px;
        max-height: 250px;
        display: grid;
        grid-template-columns: 85% 15%;
        transition: transform 0.3s;
      }

      .blog_title {
        margin-block-start: 0;
        margin-block-end: 1rem;
        font-size: 1.3em;
        font-weight: bold;
      }
    `;
  }

  render() {
    console.log("Rendering blogItem");
    console.log("Blog data:", this._blog);
    this.updateStyle();
    this.setAttribute("data-id", this._blog.id);
    this.shadowRoot.innerHTML = `
      <style>${this._style.textContent}</style>
      <h5 class="blog_title"> 
        <a href="#">${this._blog.title}</a>
      </h5>
      <div class="blog_description">
        <p>${this._blog.body}</p>
        <p>${this._blog.createdAt}</p>
      </div>
    `;
  }
}

customElements.define("blog-item", BlogItem);
