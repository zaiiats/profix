class AssortmentView {
  #carousel;
  #currentIndex;
  #timer;
  #regularWidth;
  #activeWidth;
  #fontSize;
  constructor() {
    this.#carousel = document.querySelector(".carousel");
    this.slides = Array.from(document.querySelectorAll(".card__slide"));
    this.#currentIndex = 0;
    this.#timer;
    this.#regularWidth;
    this.#activeWidth;
    this.#fontSize;

    this.#initAssortment();
  }

  /*document.querySelectorAll(".card").forEach(function (card) {
      const icons = card.querySelectorAll("i");

      icons.forEach(function (icon) {
        let isClickedIcon = false;

        if (!isClickedIcon) {
          icon.classList.add("unhovered_icon");
        }

        icon.addEventListener("mouseenter", function (event) {
          icon.classList.add("hovered_icon");
        });
        icon.addEventListener("mouseleave", function (event) {
          if (!isClickedIcon) {
            icon.classList.remove("hovered_icon");
          }
        });

        icon.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (!isClickedIcon) {
            if (icon.classList.contains("fi-sr-heart")) {
              icon.classList.add("opened_liked_icon");
            }
            if (icon.classList.contains("fi-rr-shopping-cart")) {
              icon.classList.add("opened_basket_icon");
            }
          } else {
            if (icon.classList.contains("fi-sr-heart")) {
              icon.classList.remove("opened_liked_icon");
            }
            if (icon.classList.contains("fi-rr-shopping-cart")) {
              icon.classList.remove("opened_basket_icon");
            }
          }
          isClickedIcon = !isClickedIcon;
        });
      });
    });*/
  // Carousel

  #initAssortment() {
    this.#getWidth();
    this.#addSwipeListener();
    window.addEventListener("resize", this.#getWidth.bind(this));

    this.#carousel.addEventListener("click", this.#handleClick.bind(this));
    this.slides.forEach((slide) => {
      slide.style.setProperty("transform",`translateX(-${this.#activeWidth / 2}px)`);
      slide.querySelector('.card__text').style.setProperty("font-size", '0.8rem');
      slide.addEventListener("mouseenter",
        function () {
          clearInterval(this.#timer);
        }.bind(this));
      slide.addEventListener("mouseleave", this.restartTimer.bind(this));
    });
    this.slides[0].querySelector('.card__text').style.setProperty("font-size", '1.3rem');
    this.restartTimer();
  }

  #getWidth() {
    this.slides.map((slide) => {
      slide.classList.contains("card__slide-active")
        ? (this.#activeWidth = slide.getBoundingClientRect().width)
        : (this.#regularWidth = slide.getBoundingClientRect().width);
    });
    this.#fontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    this.restartTimer();
  }

  #handleClick(e) {
    if (
      this.slides.includes(e.target.closest(".card__slide")) &
      !e.target
        .closest(".card__slide")
        ?.classList.contains("card__slide-active")
    ) {
      const clickedIndex = this.slides.indexOf(
        e.target.closest(".card__slide")
      );
      this.moveToSlide(clickedIndex);
      this.#currentIndex = clickedIndex;
      this.restartTimer();
    }
    if (e.target.closest(".slideshow-wrapper__arrow--previous")) {
      this.moveToPrevSlide();
      this.restartTimer();
    }
    if (e.target.closest(".slideshow-wrapper__arrow--next")) {
      this.moveToNextSlide();
      this.restartTimer();
    }
  }

  moveToSlide(index) {
    this.slides.forEach((slide) =>{
      slide.classList.remove("card__slide-active")
      slide.querySelector('.card__text').style.setProperty("font-size", '0.8rem');
    });
    this.slides[index].classList.add("card__slide-active");
    this.slides[index].querySelector('.card__text').style.setProperty("font-size", '1.3rem');
    const transformValue = `translateX(-${
      index * (this.#regularWidth + 2 * this.#fontSize) + this.#activeWidth / 2
    }px)`;
    this.slides.forEach((slide) =>{
      slide.style.setProperty("transform", transformValue);
    });
    this.restartTimer();
  }

  moveToNextSlide() {
    this.#currentIndex = (this.#currentIndex + 1) % this.slides.length;
    this.moveToSlide(this.#currentIndex);
    this.restartTimer();
  }

  moveToPrevSlide() {
    this.#currentIndex =
      (this.#currentIndex - 1 + this.slides.length) % this.slides.length;
    this.moveToSlide(this.#currentIndex);
    this.restartTimer();
  }

  restartTimer() {
    clearInterval(this.#timer);
    this.#timer = setInterval(this.moveToNextSlide.bind(this), 5000);
  }
  #addSwipeListener() {
    let touchstartX = 0;
    let touchendX = 0;

    this.#carousel.addEventListener("touchstart", (event) => {
      touchstartX = event.changedTouches[0].screenX;
    });

    this.#carousel.addEventListener("touchend", (event) => {
      touchendX = event.changedTouches[0].screenX;
      this.#handleSwipeGesture(touchstartX, touchendX);
    });
  }
  #handleSwipeGesture(startX, endX) {
    const swipeThreshold = 20;
    if (startX - endX > swipeThreshold) {
      this.moveToNextSlide();
    } else if (endX - startX > swipeThreshold) {
      this.moveToPrevSlide();
    }
  }
}

export default AssortmentView;