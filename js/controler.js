import AssortmentView from "./views/assortmentView.js";
import HamburgerFunctionality from "./views/hamburgerView.js";
import NavLinkFunctionality from "./views/navView.js";
import PageInitialisation from "./views/pageInitView.js";
import SlideshowView from "./views/slideshowView.js";
import TextWriter from "./views/textWriterView.js";
import ThemeSwitchFunctionalityView from "./views/themeSwitchFuncView.js";
/*import MapView from "./views/mapView.js";*/

const startPage = async function () {
  try {
    const pageInit = new PageInitialisation();
    await pageInit.init();
    
    const themeSwitchFunc = new ThemeSwitchFunctionalityView();
    const hamburgerFunc = new HamburgerFunctionality();
    const navLinkFunc = new NavLinkFunctionality();
    const slideshowFunc = new SlideshowView();
    const createTextWriter = new TextWriter();
    const assortmentView = new AssortmentView();

    /*const mapView = new MapView();*/
    
  } catch (error) {
    console.error("Error during startPage execution:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  startPage(); 
});
