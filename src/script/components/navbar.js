class Navbar extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `

    :host {
      padding: 0;
      margin: 0;
      margin-bottom: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }
      :host >div>nav {
        display: flex;
        flex-direction: row
        align-item: center;
        justify-content: space-between;
        }

     :host >div>nav>ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap:20px;
        color: var(--main-color);
        margin:25px;
        position: end;
        font-size: 1.3em;
      }

      
      ul {
          list-style: none;
          display: flex;
          gap: 10px;
          margin: 0;
          padding: 0;
      }

      li{
        
        color: var(--main-color);
        cursor: pointer;
        transition: transform .3s;
        font-weight: 500;
      }

      input[type="radio"] {
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        appearance: none;
        }

      

      .tools {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      margin: 20px
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
        font-size: 1.2em;
        font-weight: bold;
        color: var(--active-color);
        transform : var(--transition);

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
    this._shadowRoot.innerHTML += `
        <div>
          <nav>
            <ul>
              <li><input type="radio" id="yourNotes" name="text" class="hidden-input">
              <label for="yourNotes" class="clickable-text">MyNotes</label></li>

              <li><input type="radio" id="archive" name="text" class="hidden-input">
              <label for="archive" class="clickable-text">Archive</label></li>

              <li></li>           
            </ul>
            <div class="tools">
            <search-bar></search-bar>
            </div>
          </nav>
        </div>
      `;
  }
}

customElements.define("nav-bar", Navbar);
