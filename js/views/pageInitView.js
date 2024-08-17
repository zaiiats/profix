class PageInitialisation {
  constructor() {
    
  }

  async init() {
    await this.initNav()
    await this.initFooter()
    this.initAnimation()
  }
  async initNav() {
    try {
      const response = await fetch('../../elements/nav/index.html');
      const data = await response.text();
      document.querySelector('nav').innerHTML = data;
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  }
  
  async initFooter(){
    try {
      const response = await fetch("../../elements/footer/index.html");
      const data = await response.text();
      document.querySelector("footer").innerHTML = data;
    } catch (error) {
      console.error("Error loading footer:", error);
    }
    
  }
  initAnimation() {
    let hexagonSection = document.querySelector(".hex-wrapper");
    document.querySelector(".welcome-page").style.setProperty("opacity", "1");
    document
      .querySelector(".sections-wrapper")
      .style.setProperty("opacity", "1");
    hexagonSection.style.setProperty("left", "0");
  }

}

export default PageInitialisation;
