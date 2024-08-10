class NavFunctionality {
  #nav;
  constructor() {
    this.#nav = document.querySelector("nav");
    this.#checkScroll();
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
}

export default new NavFunctionality();
