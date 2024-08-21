import fetchData from "./model.js";

import AssortmentView from "./views/assortmentView.js";
import HamburgerFunctionality from "./views/hamburgerView.js";
import NavLinkFunctionality from "./views/navView.js";
import PageInitialisation from "./views/pageInitView.js";
import SlideshowView from "./views/slideshowView.js";
import TextWriter from "./views/textWriterView.js";
import ThemeSwitchFunctionalityView from "./views/themeSwitchFuncView.js";

import {state} from "./model.js"

const startPage = async function (state) {
  try {
    await fetchData();
    const pageInit = new PageInitialisation();
    await pageInit.init();
    
    const themeSwitchFunc = new ThemeSwitchFunctionalityView(state.theme);
    const hamburgerFunc = new HamburgerFunctionality();
    const navLinkFunc = new NavLinkFunctionality();
    const slideshowFunc = new SlideshowView();
    const createTextWriter = new TextWriter();
    const assortmentView = new AssortmentView(state.data);
    
  } catch (error) {
    console.error("Error during startPage execution:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  startPage(state); 
});
