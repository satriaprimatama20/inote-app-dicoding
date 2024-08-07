class MyUtils {
  static emptyElement(element) {
    element.innerHTML = "";
  }
  static showElement(element) {
    element.style.display = "block";
    element.hidden = false;
  }

  static hideElement(element) {
    element.style.display = "none";
    element.hidden = true;
  }

  static isValidInteger(newValue) {
    Number.isNaN(newValue) || Number.isFinite(newvalue);
  }
}

export default MyUtils;
