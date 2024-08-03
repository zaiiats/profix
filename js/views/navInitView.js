class NavLinkFunctionality {
  constructor() {
    this.navWrapper = document.querySelector(".nav__wrapper");
    this.items = Array.from(document.querySelectorAll(".nav__item"));
    this.isOpenedMenu = false;
    this.trackEvent();
  }
  trackEvent() {
    this.items.forEach((item) => {
      this.addListeners(item, "mouseenter", "mouseleave", "click");
    });
  }

  addListeners(el, ...event) {
    event.forEach((e) =>
      el.addEventListener(e, this.linkFunct.bind(this, e, el))
    );
  }

  linkFunct(e, el) {
    if (e === "mouseenter") this.openItem(el);
    if (e === "mouseleave") this.closeItem(el);
    if (e === "click") {
      if (this.isOpenedMenu === true) this.closeItem(el);
      else this.openItem(el);
    }
  }
  openItem(item) {
    item.classList.add("nav__item--opened");
    item.querySelector(".nav__item--dropdown").classList.add("show_dropdown");
    item.querySelector(".nav__svg--dropdown").classList.add("show_svg");
    item.querySelector(".nav__item--top").classList.add("show_top_menu");
    this.isOpenedMenu = true;
  }
  closeItem(item) {
    item.classList.remove("nav__item--opened");
    item.querySelector(".nav__item--dropdown").classList.remove("show_dropdown");
    item.querySelector(".nav__svg--dropdown").classList.remove("show_svg");
    item.querySelector(".nav__item--top").classList.remove("show_top_menu");
    this.isOpenedMenu = false;
  }
}

export default new NavLinkFunctionality();
