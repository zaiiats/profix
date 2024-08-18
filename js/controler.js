import HamburgerFunctionality from "./views/hamburgerView.js";
import MapView from "./views/mapView.js";
import NavLinkFunctionality from "./views/navView.js";
import PageInitialisation from "./views/pageInitView.js";
import SlideshowView from "./views/slideshowView.js";
import TextWriter from "./views/textWriterView.js";
import ThemeSwitchFunctionalityView from "./views/themeSwitchFuncView.js";

console.log(L);


const startPage = async function () {
  
  try {
    const pageInit = new PageInitialisation();
    await pageInit.init();

    console.log(L);
    
    const mapView = new MapView();
    const hamburgerFunc = new HamburgerFunctionality();
    const navLinkFunc = new NavLinkFunctionality();
    const slideshowFunc = new SlideshowView();
    const createTextWriter = new TextWriter();
    const themeSwitchFunc = new ThemeSwitchFunctionalityView();

  } catch (error) {
    console.error("Error during startPage execution:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  startPage();
});
