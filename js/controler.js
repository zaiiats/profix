import HamburgerFunctionality from "./views/hamburgerView.js";
/*import MapView from "./views/mapView.js";*/
import NavLinkFunctionality from "./views/navView.js";
import PageInitialisation from "./views/pageInitView.js";
import SlideshowView from "./views/slideshowView.js";
import TextWriter from "./views/textWriterView.js";
import ThemeSwitchFunctionalityView from "./views/themeSwitchFuncView.js";

/*import L from "leaflet";
import "leaflet/dist/leaflet.css";*/

const startPage1 = async function () {
  const pageInit = new PageInitialisation();
  await pageInit.init();
};

const startPage = async function () {
  try {
    console.log(L);

    /*const mapView = new MapView(); */
    const hamburgerFunc = new HamburgerFunctionality();
    const navLinkFunc = new NavLinkFunctionality();
    const slideshowFunc = new SlideshowView();
    const createTextWriter = new TextWriter();
    const themeSwitchFunc = new ThemeSwitchFunctionalityView();
    
  } catch (error) {
    console.error("Error during startPage execution:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await startPage1();
  startPage(); 
});
