import {fetchData} from "./model.js";
import {setState} from './model.js'
import {state} from "./model.js"

import HamburgerFunctionality from "./views/hamburgerView.js";
import NavLinkFunctionality from "./views/navView.js";
import PageInitialisation from "./views/pageInitView.js";
import SlideshowView from "./views/slideshowView.js";
import TextWriter from "./views/textWriterView.js";
import ThemeSwitchFunctionalityView from "./views/themeSwitchFuncView.js";
import CarouselView from "./views/carouselView.js";
import AssortmentView from "./views/assortmentView.js";
import SvgCardView from "./views/svgCardView.js";
import AccountView from "./views/accountView.js"


const startPage = async function (state) {
  try {
    await fetchData();
    const pageInit = new PageInitialisation();
    await pageInit.init();
    
    const hamburgerFunc = new HamburgerFunctionality();
    const navLinkFunc = new NavLinkFunctionality();
    const slideshowFunc = new SlideshowView();
    const createTextWriter = new TextWriter();
    const carouselView = new CarouselView();
    carouselView.setData(state.data);
    const assortmentView = new AssortmentView();    
    assortmentView.setData(state.data);
    const themeSwitchFunc = new ThemeSwitchFunctionalityView();
    themeSwitchFunc.sendData(localStorage.setItem.bind(localStorage));
    themeSwitchFunc.setData(state.theme);
    const svgCardView = new SvgCardView();    
    svgCardView.sendData(localStorage.setItem.bind(localStorage));
    svgCardView.setData(state.data);
    const accountView = new AccountView();
    accountView.sendData(localStorage.removeItem.bind(localStorage));
    accountView.setData(state.data);


  } catch (error) {
    console.error("Error during startPage execution:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  startPage(state); 
});
