class PageInitialisation {
  constructor() {}

  async init() {
    await this.initNav();
    await this.initThemeSwitch();
    await this.initFooter();
    this.initAnimation();
  }
  async initNav() {
    try {
      const response = await fetch("./elements/nav.html");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.text();
      console.log(`nav => ${data}`);
      document.querySelector("nav").innerHTML = data;
    } catch (error) {
      console.error("Error fetching nav.html:", error);
    }
  }

  async initThemeSwitch() {
    if (!document.querySelector(".theme-switch")) return;
    try {
      const response = await fetch("/elements/themeSwitch.html");
      const data = await response.text();
      document.querySelector(".theme-switch").innerHTML = data;
      console.log(`themeSwitch => ${data}`);
    } catch (error) {
      console.error("Error loading theme switch:", error);
    }
  }

  async initFooter() {
    try {
      const response = await fetch("/static/elements/footer.html");
      const data = await response.text();
      document.querySelector("footer").innerHTML = data;
      console.log(`footer => ${data}`);
    } catch (error) {
      console.error("Error loading footer:", error);
    }
  }

  initAnimation() {
    let hexagonSection = document.querySelector(".hex-wrapper");
    document.querySelector(".welcome-page")?.style.setProperty("opacity", "1");
    document
      .querySelector(".sections-wrapper")
      ?.style.setProperty("opacity", "1");
    hexagonSection?.style.setProperty("left", "0");
  }
}

export default PageInitialisation;
