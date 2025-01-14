class PageInitialisation {
  constructor() {}

  async init() {
    this.#initAnimation();
  }

  #initAnimation() {
    let hexagonSection = document.querySelector(".hex-wrapper");
    document.querySelector(".welcome-page")?.style.setProperty("opacity", "1");
    document.querySelector(".sections-wrapper")?.style.setProperty("opacity", "1");
    hexagonSection?.style.setProperty("left", "0");
  }
}

export default PageInitialisation;
