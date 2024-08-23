class SvgCardView {
  #svg;

  constructor() {
    this.#svg = document.querySelector('.svg__card')
  }

  #initSvgs(){
    this.wrapper = document.querySelector(".site__content--assortment");
    if (!this.wrapper) this.wrapper = document.querySelector(".site__content--account");
    this.wrapper.addEventListener('click',this.#clickHandler.bind(this));
    this.svgs = document.querySelectorAll('svg__card');
    this.documentCards = document.querySelectorAll('.card')

    this.documentCards.forEach((card) => {
      if (card.getAttribute("like") === "yes") {
        card.querySelector(".icon-item--like").classList.add('icon-item__like--opened');
      }
      if (card.getAttribute("bookmark") === "yes") {
        card.querySelector(".icon-item--bookmark").classList.add('icon-item__bookmark--opened');
      }
    });
  }

  #clickHandler(e){
    if (e.target.closest(".svg__card") || e.target.classList.contains('svg__card')) {
      let svg = e.target.closest(".svg__card") || e.target.classList.contains("svg__card");
        
      let svgType = svg.classList.contains('icon-item--like')?'like':'bookmark';
      
      e.stopPropagation();
      e.preventDefault();
      const itemId = svg.closest(".card").getAttribute("productId");
      this.#checkData(itemId,svgType,svg)
    }
  }

  #checkData(itemId,svgType,svg){
    let currentCard = this.cards[itemId-1];
    
    if (currentCard[svgType] == 'no') {
      this.cards[itemId-1][svgType] = "yes";
      this.#svgAction('open',svgType,svg)
    } else {
      this.cards[itemId-1][svgType] = "no";
      this.#svgAction('close', svgType, svg);
    }
  }

  #svgAction(action,svgType,svg){
    if (action === 'open') {
      svg.classList.add(`icon-item__${svgType}--opened`);
    }
    else {
      svg.classList.remove(`icon-item__${svgType}--opened`);
    }
    let data = JSON.stringify(this.cards)
    this.#putData(data);
  }


  setData(data){
    this.data = data;
    this.cards = this.data;
    if (this.#svg) this.#initSvgs();
  }

  sendData(callback){
    this.callback = callback;
  }

  #putData(key){
    this.callback(`data`, key);
  }

}

export default SvgCardView;