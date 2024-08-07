class ThemeSwitchFunctionalityView {
  #themeSwitchCheckbox;
  #svgs;
  #oval;
  constructor() {
    this.#themeSwitchCheckbox = document.querySelector(".theme-switch__checkbox");
    this.#svgs = document.querySelectorAll(".theme-switch__svg");
    this.#oval = document.querySelector(".theme-switch__oval");
    this.#initSwitch();
  }
  #initSwitch(){
    this.#themeSwitchCheckbox.addEventListener('change',this.#changeTheme.bind(this))
  }
  #changeTheme(){
    this.#svgs.forEach(svg=>svg.classList.toggle('theme-switch__svg--active'))
    this.#oval.classList.toggle("theme-switch__oval--active");
  }
}


export default new ThemeSwitchFunctionalityView();