class HamburgerFunctionality {
  #checkbox;
  #linkBox;
  #line1;
  #line2;
  #line3;

  constructor() {
    this.#checkbox = document.querySelector(".hamburger-menu__checkbox");
    this.#linkBox = document.querySelector(".hamburger-menu__link-box");
    this.#line1 = document.querySelector(".hamburger-menu__line-1");
    this.#line2 = document.querySelector(".hamburger-menu__line-2");
    this.#line3 = document.querySelector(".hamburger-menu__line-3");
    this.#initHamburger();
  }  

  #initHamburger() {
    this.#checkbox.addEventListener("change", this.#checkboxCheck.bind(this));
  }

  #checkboxCheck(e) {
    if (this.#checkbox.checked) this.#open();
    else this.#close();

    this.#linkBox.addEventListener("click", this.#handleClick.bind(this));
  }

  #handleClick(e) {
    if (e.target === this.#linkBox) {
      this.#checkbox.checked = false;
      this.#close();
    }
  }

  #open() {
    this.#linkBox.classList.add("hamburger-menu__link-box--shown");
    this.#line1.classList.add("hamburger-menu__line-1--shown");
    this.#line2.classList.add("hamburger-menu__line-2--shown");
    this.#line3.classList.add("hamburger-menu__line-3--shown");
  }

  #close() {
    this.#linkBox.classList.remove("hamburger-menu__link-box--shown");
    this.#line1.classList.remove("hamburger-menu__line-1--shown");
    this.#line2.classList.remove("hamburger-menu__line-2--shown");
    this.#line3.classList.remove("hamburger-menu__line-3--shown");
  }
}

export default HamburgerFunctionality;
