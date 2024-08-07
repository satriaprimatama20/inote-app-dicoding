class Navbar extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: open });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        width: 100%;
        color: orange;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: var(--main-color);
        padding: 0;
        margin: 0;
      }

      .nav>.title-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        row-gap: 500px;
        color: var(--main-color);
        padding: 0;
        gap: 26px;
        cursor: pointer;
        font-size: 18px;
        transition: transform .3s;
      }

      .nav.tools {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      }

      .nav>.tools {
        gap: 10px;
      }

      
      .hidden-input {
        display: none;
      }

      .clickable-text {
        cursor: pointer;
        transition: font-size 0.3s;
        font-size: 1em;
      }

      .hidden-input:checked+.clickable-text {
        font-size: 1.5em;
        /* Ubah ukuran sesuai kebutuhan Anda */
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML = `
        <div>
          <nav>
            <div class="title-section">
             <input type="radio" id="yourNotes" name="text" class="hidden-input">
              <label for="yourNotes" class="clickable-text">Your Notes</label>

              <input type="radio" id="archive" name="text" class="hidden-input">
              <label for="archive" class="clickable-text">Archive</label>
            </div>
            <div class="tools">
              <search-form></search-form>
              </i>
            </div>
          </nav>
        </div>
      `;
  }
}

customElements.define("navbar", Navbar);
