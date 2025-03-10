class NavLinkFunctionality {
  #nav;
  #items;
  
  constructor() {
    this.#items = Array.from(document.querySelectorAll(".nav-item"));
    this.#nav = document.querySelector("nav");
    this.#checkScroll();
    this.#trackEvent();
  }

  #checkScroll() {
    const options = {
      rootMargin: "0px",
      threshold: 1,
    };
    const observerCallback = ([entry]) => {
      if (entry.isIntersecting) {
        this.#nav.classList.remove("nav--closed");
      } else {
        this.#nav.classList.add("nav--closed");
      }
    };
    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(document.querySelector("body"));
  }

  #trackEvent() {
    if (!this.#isTouchDevice()) {
      this.#items.forEach((item) => {
        this.#addListeners(item, "click", "mouseenter", "mouseleave");
      });
    }
    if (this.#isTouchDevice()) {
      this.#items.forEach((item) => {
        this.#addListeners(item, "click");
      });
    }
    document.querySelector('body').addEventListener('click',e=>{
      if(!this.#items.includes(e.target.closest(".nav-item"))) {
        this.#items.forEach(item=>this.#closeItem(item));
      }
    })
  }

  #isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  #addListeners(el, ...event) {
    event.forEach((e) =>
      el.addEventListener(e, this.#linkFunct.bind(this, e, el))
    );
  }

  #linkFunct(e, el) {
    if (e === "click") {
      this.#handleClick(el);
    }
    if (e === "mouseenter") this.#openItem(el);
    if (e === "mouseleave") this.#closeItem(el);
    
  }

  #handleClick(el) {
    if (!el.classList.contains("nav-item--opened")) {
      this.#items.forEach((item) => this.#closeItem(item));
      this.#openItem(el);
    } else if (el.classList.contains("nav-item--opened")) {
      this.#closeItem(el);
    }
  }

  #openItem(item) {
    item.classList.add("nav-item--opened");
    item.querySelector(".nav-item__dropdown").classList.add("nav-item__dropdown--shown");
    item.querySelector(".nav-item__svg-dropdown").classList.add("nav-item__svg-dropdown--shown");
    item.querySelector(".nav-item__top").classList.add("nav-item__top--shown");

    let linksAccount = item.querySelector(".nav-item__links--top.account");
    linksAccount && linksAccount.classList.add("nav-item__links--top-opened");
  }

  #closeItem(item) {
    item.classList.remove("nav-item--opened");
    item.querySelector(".nav-item__dropdown").classList.remove("nav-item__dropdown--shown");
    item.querySelector(".nav-item__svg-dropdown").classList.remove("nav-item__svg-dropdown--shown");
    item.querySelector(".nav-item__top").classList.remove("nav-item__top--shown");
    let linksAccount = item.querySelector(".nav-item__links--top.account");
    linksAccount && linksAccount.classList.remove("nav-item__links--top-opened");
  }
}

export default NavLinkFunctionality;
