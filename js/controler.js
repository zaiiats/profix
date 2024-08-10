import hamburgerFunc from "./views/hamburgerView.js";
import nav from "./views/navView.js";
import pageInit from "./views/pageInitView.js";
import slideshowFunc from "./views/slideshowView.js";
import createTextWriter from "./views/textWriterView.js";
import themeSwitchFunc from "./views/themeSwitchFuncView.js";

const startPage = function(){
  hamburgerFunc();
  nav();
  pageInit();
  slideshowFunc();
  createTextWriter();
  themeSwitchFunc();
};
