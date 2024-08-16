class slideshowView {
  #slides;
  #dots;
  #currentSlide = 0;
  #prev;
  #next;
  #imgDelivery;
  #slideshow;
  #slidesBox;
  constructor() {
    this.#slides = Array.from(document.querySelectorAll(".slide"));
    this.#prev = document.querySelector(".slideshow-wrapper__arrow--previous");
    this.#next = document.querySelector(".slideshow-wrapper__arrow--next");
    this.#imgDelivery = document.querySelector(".slide-item__img--delivery");
    this.#slideshow = document.querySelector(".slideshow-wrapper");
    this.#slidesBox = document.querySelector(".slides");
    this.#createDots();
    this.#setHeight();
    this.#checkHeight();
    this.#initView();
    this.#addSwipeListener();
  }
  #createDots() {
    let html = "";
    this.#slides.forEach(
      (slide, i) => (html += `<div class="dot dot--${i + 1}"></div>`)
    );
    document
      .querySelector(".dots-wrapper")
      .insertAdjacentHTML("beforeend", html);
    this.#dots = document.querySelectorAll(".dot");
  }
  #checkHeight() {
    window.addEventListener("resize", () => {
      this.#setHeight();
    });
  }
  #setHeight() {
    let biggestHeight = Array.from(this.#slides).reduce((max, slide) => {
      const slideHeight = slide.getBoundingClientRect().height;
      return slideHeight > max ? slideHeight : max;
    }, 0);

    this.#slidesBox.style.height = biggestHeight + "px";
  }

  #initView() {
    this.#moveToSlide(0);
    [this.#prev, this.#next].forEach((el) =>
      el.addEventListener("click", this.#handleClick.bind(this))
    );
    this.#dots.forEach((dot, i) => {
      dot.addEventListener("click", (e) => this.#handleClick(e, i));
    });
  }
  #handleClick(e, i) {
    if (i + 1) this.#currentSlide = i;
    if (e.target?.closest('.slideshow-wrapper__arrow--previous') === this.#prev) this.#currentSlide--;
    if (e.target?.closest('.slideshow-wrapper__arrow--next') === this.#next) this.#currentSlide++;

    if (this.#currentSlide === -1) this.#currentSlide = this.#slides.length - 1;
    if (this.#currentSlide === this.#slides.length) this.#currentSlide = 0;
    this.#moveToSlide(this.#currentSlide);
  }
  #moveToSlide(i) {
    this.#slides.forEach((slide) => slide.classList.add("slide--hidden"));
    this.#slides[i].classList.remove("slide--hidden");
    this.#dots.forEach((dot) => dot.classList.add("dot--hidden"));
    this.#dots[i].classList.remove("dot--hidden");
    this.#setImg(i);
    if (i === 1) {
      this.#imgDelivery.style.setProperty(
        "animation",
        "moveInDeliveryImage .5s ease-in-out"
      );
      this.#imgDelivery.style.setProperty("opacity", "1");
    } else {
      this.#imgDelivery.style.setProperty(
        "animation",
        "moveOutDeliveryImage .5s ease-in-out"
      );
      this.#imgDelivery.style.setProperty("opacity", "0");
    }
  }
  #setImg(i) {
    this.#slideshow.style.setProperty(
      "background-image",
      `linear-gradient(var(--background-bigger), var(--background-bigger)) ,url('/img/slideshow_img_${i+1}.jpg')`
    );   
  }

  #addSwipeListener() {
    let touchstartX = 0;
    let touchendX = 0;

    this.#slideshow.addEventListener("touchstart", (event) => {
      touchstartX = event.changedTouches[0].screenX;
    });

    this.#slideshow.addEventListener("touchend", (event) => {
      touchendX = event.changedTouches[0].screenX;
      this.#handleSwipeGesture(touchstartX, touchendX);
    });
  }
  #handleSwipeGesture(startX, endX) {
    const swipeThreshold = 50;
    if (startX - endX > swipeThreshold) {
      this.#currentSlide++;
      this.#handleClick(this.#currentSlide);
    } else if (endX - startX > swipeThreshold) {
      this.#currentSlide--;
      this.#handleClick(this.#currentSlide);
    }
  }
}

export default new slideshowView();