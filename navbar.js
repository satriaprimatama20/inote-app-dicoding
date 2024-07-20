class Navbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = `
        <div class="navbar">
          <nav>
            <div class="title-section">
             <input type="radio" id="yourNotes" name="text" class="hidden-input">
              <label for="yourNotes" class="clickable-text">Your Notes</label>

              <input type="radio" id="archive" name="text" class="hidden-input">
              <label for="archive" class="clickable-text">Archive</label>
            </div>
            <div class="tools">
              <search-form></search-form>
              <i class="bi bi-person-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
              </i>
            </div>
          </nav>
        </div>
      `;
  }
}

customElements.define("navbar-component", Navbar);
