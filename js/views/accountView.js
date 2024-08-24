class ExitView {
  #callback;
  #exitButton;
  #popUp;
  #closeButton;
  #deleteButton;
  #svgClose;
  #background;

  constructor() {
    this.#exitButton = document.querySelector(".account__section--exit");
    this.#popUp = document.querySelector(".pop-up");
    this.#closeButton = document.querySelector(".pop-up__button--close");
    this.#deleteButton = document.querySelector(".pop-up__button--delete");
    this.#svgClose = document.querySelector(".pop-up__close");
    this.#background = document.querySelector(".pop-up__background");
  }

  #initExitView() {
    this.#exitButton.addEventListener("click", this.#handleClick.bind(this));
    setTimeout(this.#moveToItem.bind(this), 500);
  }

  #handleClick(e) {
    this.#popUp.style.display = "flex";

    this.#addCloseListener(this.#closeButton, this.#svgClose, this.#background);
    this.#deleteButton.addEventListener("click", this.#deleteData.bind(this));
  }
  #addCloseListener(...item) {
    item.forEach((item) => {
      item.addEventListener("click", ()=>this.#popUp.style.display = "none");
    });
  }

  #moveToItem() {
    let url = window.location.href;
    let hash = url.slice(url.indexOf("#"));
    if (hash === "/") return;
    else {
      let bar = document.querySelector(hash);
      if (bar) {
        const y =
          bar.getBoundingClientRect().top +
          window.scrollY -
          9 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        window.scroll({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }

  #deleteData() {
    console.log("Deleting data...");
    this.#callback();
    window.location.href = window.location.href.split("#")[0];
  }

  setData(state) {
    this.state = state;
    if (this.#exitButton) this.#initExitView();
  }

  sendData(callback) {
    this.#callback = callback;
  }
}

export default ExitView;