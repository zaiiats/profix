class ExitView {
  #callback;
  #exitButton;
  #popUp;
  #dropdown;

  constructor() {
    this.#exitButton = document.querySelector(".account__section--exit");
    this.#popUp = document.querySelector(".pop-up");
    this.#dropdown = document.querySelectorAll('.nav-item__links--dropdown')[2];
  }

  #initExitView() {
    setTimeout(this.#moveToItem.bind(this), 100);
    this.#dropdown.addEventListener("click", this.#handleClick.bind(this));
    this.#exitButton.addEventListener("click", ()=>this.#popUp.style.display = "flex");
    this.#popUp.addEventListener('click',this.#handleClick.bind(this));
  }

  #handleClick(e) {
    const target = e.target;
    const navItem = target.closest('.icon-item');
    
    if (navItem) {
      let svgItem = navItem.querySelector('.svg');
      e.preventDefault()
      
      if (svgItem.classList.contains('icon-item--heart')) this.#moveToItem('like')
      if (svgItem.classList.contains('icon-item--bookmark')) this.#moveToItem('bookmark')
      if (navItem.classList.contains('icon-item__exit')) this.#moveToItem('exit')
    }

    if (
      target.closest(".pop-up__button--close") ||
      target.closest(".pop-up__close") ||
      target.closest(".pop-up__background")
    ) this.#popUp.style.display = "none";
    if (target.closest(".pop-up__button--delete")) this.#deleteData();
  }

  #moveToItem(type) {   
    let hash; 
    if (type) hash = `#${type}`;
    else{
      let url = window.location.href;
      hash = url.slice(url.indexOf("#"));
    }
    if (hash === "/") return;
    else {
      let bar = document.querySelector(hash);
      if (bar) {
        const y =
          bar.getBoundingClientRect().top + window.scrollY - 9 * parseFloat(getComputedStyle(document.documentElement).fontSize);
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