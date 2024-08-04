class PageInitialisation {
  constructor() {
    this.#initPage();
  }

  #initPage() {
    document.addEventListener("DOMContentLoaded", function () {
      let hexagonSection = document.querySelector(".hexagon_section");
      document.querySelector(".main_page").style.setProperty("opacity", "1");
      document.querySelector(".site").style.setProperty("opacity", "1");
      hexagonSection.style.setProperty("left", "0");
    });
  }
}

export default new PageInitialisation();
