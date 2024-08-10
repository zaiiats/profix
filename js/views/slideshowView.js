class slideshowView {
  #currentSlide = 0;
  #dots;
  #prev;
  #next;
  #slides;
  #imgDelivery;
  constructor() {
    this.#slides = document.querySelectorAll('.slide');
    this.#prev = document.querySelector(".slideshow-wrapper__arrow--previous");
    this.#next = document.querySelector(".slideshow-wrapper__arrow--next");
    this.#imgDelivery = document.querySelector(".slide-item__img--delivery");
    this.#createDots();
    this.#initView();  
  }
  #createDots(){
    let html='';
    this.#slides.forEach((slide,i)=>
      html+=`<div class="dot dot--${i+1}"></div>`
    )
    document.querySelector('.dots-wrapper').insertAdjacentHTML('beforeend',html);
    this.#dots = document.querySelectorAll('.dot');
  }

  #initView() {
    this.#moveToSlide(0);
    [this.#prev,this.#next].forEach(el=>el.addEventListener('click', this.#handleClick.bind(this)));
    this.#dots.forEach((dot, i) => {
      dot.addEventListener("click", (e) => this.#handleClick(e, i));
    });
  }
  #handleClick(e, i) {
    if (i+1) this.#currentSlide = i;
    if (e.target === this.#prev) this.#currentSlide--;
    if (e.target === this.#next) this.#currentSlide++; 

    if (this.#currentSlide === -1) this.#currentSlide = this.#slides.length - 1;
    if (this.#currentSlide === this.#slides.length) this.#currentSlide = 0;
    this.#moveToSlide(this.#currentSlide)
  }
  #moveToSlide(i){
    this.#slides.forEach(slide=>slide.classList.add('slide--hidden'));
    this.#slides[i].classList.remove("slide--hidden");
    this.#dots.forEach(dot=>dot.classList.add('dot--hidden'));
    this.#dots[i].classList.remove("dot--hidden");
    this.#setImg(i);
    if (i === 1) {
      this.#imgDelivery.style.setProperty("animation", "moveInDeliveryImage .5s ease-in-out");
      this.#imgDelivery.style.setProperty("opacity", "1");
    } else {
      this.#imgDelivery.style.setProperty("animation", "moveOutDeliveryImage .5s ease-in-out");
      this.#imgDelivery.style.setProperty("opacity", "0");
    }
  }
  #setImg(i){
    document
      .querySelector(".slideshow-wrapper").style.setProperty(
        "background-image",
        `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)) ,url('/img/slideshow_img_${i+1}.jpg')`
      );
  }
  
}

export default new slideshowView();