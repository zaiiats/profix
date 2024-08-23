class ExitView {
  #callback;
  #exitButton;
  #popUp;
  #closeButton;
  #deleteButton;
  #svgClose;
  #background;
  #content;

  constructor() {
    this.#exitButton = document.querySelector(".account__section--exit");
    this.#popUp = document.querySelector(".pop-up");
    this.#closeButton = document.querySelector(".button__close");
    this.#deleteButton = document.querySelector(".button__delete");
    this.#svgClose = document.querySelector(".pop-up__svg--close");
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
      item.addEventListener("click", this.#closePopUp.bind(this));
    });
  }

  #moveToItem() {
    let bar;
    let url;
    let hash;
    url = window.location.href;
    hash = url.slice(url.indexOf("#"));
    if (hash === "/") return;
    else {
      bar = document.querySelector(hash);
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

  #closePopUp() {
    this.#popUp.style.display = "none";
  }

  #deleteData() {
    console.log("Deleting data...");
    this.#callback();
    location.reload();
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