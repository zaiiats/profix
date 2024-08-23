class ExitView {
  #exitButton;

  constructor() {
    this.#exitButton = document.querySelector(".account__section--exit");
    if (this.#exitButton) this.#initExitView();
  }

  #initExitView(){
    this.#exitButton.addEventListener('click', this.#handleClick.bind(this))   
  }

  #handleClick(e){
    console.log(e);
    
  }

}

export default ExitView;