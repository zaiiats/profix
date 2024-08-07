class PageInitialisation {
  constructor() {
    this.#initPage();
  }

  #initPage() {
    document.addEventListener("DOMContentLoaded", function () {
      let hexagonSection = document.querySelector(".hex-wrapper");
      document.querySelector(".welcome-page").style.setProperty("opacity", "1");
      document.querySelector(".site").style.setProperty("opacity", "1");
      hexagonSection.style.setProperty("left", "0");
    });
  }
}

export default new PageInitialisation();
