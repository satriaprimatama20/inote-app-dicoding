/* Silakan impor kode di sini */

class ImageFigure extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Hallo, nama saya image-figure";
  }
}

customElements.define("image-figure", ImageFigure);
