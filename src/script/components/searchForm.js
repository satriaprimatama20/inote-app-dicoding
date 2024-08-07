class searchForm extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = `
      <div id="searchBarContainer" class="inter-regular search-bar-container">
        <div class="floating-form">
          <form id="searchForm" class="search-form">
            <div class="form-group">
              <input id="name" name="name" type="search" required />
              <label for="name">Notes Title</label>
            </div>
            <img id="searchFormButton" class="fi fi-br-search"></img>
          </form>
        </div>
      </div>`;
  }
}

customElements.define("search-form", searchForm);
