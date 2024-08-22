class AssortmentView {
  #carousel;
  #prevIds;
  #numOfCards;
  #slides;
  #currentIndex;
  #timer;
  #regularWidth;
  #activeWidth;
  #fontSize;
  constructor(data) {
    this.data = data;
    this.#carousel = document.querySelector(".carousel");
    this.#prevIds = [];
    this.#numOfCards;
    this.#slides;
    this.cards;
    this.#currentIndex = 0;
    this.#timer;
    this.#regularWidth;
    this.#activeWidth;
    this.#fontSize;
    this.data;

    
    if (this.#carousel) this.#initCarousel();
  }

  #initCarousel() {    
    this.#numOfCards = parseFloat(this.#carousel.getAttribute("length"));

    this.#initHtml();
    this.#initFirstCard();
    this.#getWidthAndFont();

    this.#slides.forEach((slide) => {
      slide.style.setProperty(
        "transform",
        `translateX(-${this.#activeWidth / 2}px)`
      );
      slide.addEventListener(
        "mouseenter",
        function () {
          clearInterval(this.#timer);
        }.bind(this)
      );
      slide.addEventListener("mouseleave", this.restartTimer.bind(this));
    });

    this.moveToSlide(0);
    window.addEventListener("resize", this.#getWidthAndFont.bind(this));
    this.#carousel.addEventListener("click", this.#handleClick.bind(this));
    this.#addSwipeListener();
    this.#initSvgs();
    this.restartTimer();
  }

  #initHtml() {
    function checkRandomNumber(randomNumber) {
      while (randomNumber < 1 || this.#prevIds.includes(randomNumber)) {
        if (randomNumber < 1) {
          randomNumber = this.#numOfCards;
        } else if (this.#prevIds.includes(randomNumber)) {
          randomNumber = randomNumber > 1 ? randomNumber - 1 : this.#numOfCards;
        }
      }
      return randomNumber;
    }

    for (let i = 0; i < this.#numOfCards; i++) {
      let randomNumber = Math.trunc(Math.random() * this.data.length) + 1;
      randomNumber = checkRandomNumber.call(this, randomNumber);

      this.#insertCards(i);
      this.#insertCardInfo(randomNumber, i);
      this.#prevIds.push(randomNumber);
    }
  }

  #insertCards(i) {
    let html = `<div class="card__slide"></div>`;
    document
      .querySelector(".cards-wrapper")
      .insertAdjacentHTML("beforeend", html);
    this.#slides = Array.from(document.querySelectorAll(".card__slide"));
  }

  #insertCardInfo(randomNumber, i) {
    let current = this.data[randomNumber - 1];
    let html = `
      <a class="card carousel__card" aria-label="card" item="priklad" like="${current.like}" bookmark="${current.bookmark}" href="${current.family}#${current.type}">
        <div class="card__action card__action--not-active">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-item--heart svg">
            <path d="m19.4626 3.99415c-2.6817-1.64492-5.0222-.98204-6.4282.07386-.5766.43295-.8648.64942-1.0344.64942s-.4578-.21647-1.0344-.64942c-1.40598-1.0559-3.74651-1.71878-6.42816-.07386-3.51937 2.15879-4.315719 9.28075 3.80209 15.28925 1.54619 1.1444 2.31927 1.7166 3.66047 1.7166s2.1143-.5722 3.6605-1.7166c8.1178-6.0085 7.3214-13.13046 3.8021-15.28925z"/>
          </svg>
          <svg viewBox="0 0 24 24" w xmlns="http://www.w3.org/2000/svg" class="icon-item--bookmark svg">
            <path d="m4 17.9808v-8.27327c0-3.63337 0-5.45005 1.17157-6.57879 1.17158-1.12874 3.05719-1.12874 6.82843-1.12874 3.7712 0 5.6569 0 6.8284 1.12874 1.1716 1.12874 1.1716 2.94542 1.1716 6.57879v8.27327c0 2.3059 0 3.4588-.7728 3.8715-1.4967.7991-4.304-1.8671-5.6372-2.6699-.7732-.4656-1.1598-.6984-1.59-.6984s-.8168.2328-1.59.6984c-1.3332.8028-4.14053 3.469-5.63715 2.6699-.77285-.4127-.77285-1.5656-.77285-3.8715z"/>
          </svg>
        </div>
        <div class="card__img-box">
          <img class="card__img" srcset="../img/${current.family}-1x.png 1x, ../img/${current.family}-2x.png 2x" alt="${current.family}">
        </div>
        <div class="card__info">
          <div class="card__divider"></div>
          <div class="carousel-card__text card__text">${current.name}</div>
        </div>
      </a>
    `;
    this.#slides[i].insertAdjacentHTML("beforeend", html);
  }

  #initFirstCard() {
    let first = this.#slides[0];
    first.classList.add("card__slide--active");
    first
      .querySelector(".carousel-card__text")
      .style.setProperty("font-size", "1.3rem");
    first.querySelector(".card__action").classList.remove("card__action--not-active");
  }

  #getWidthAndFont() {
    this.#slides.forEach((slide) => {
      slide.style.setProperty("transition", "none");
      slide.classList.contains("card__slide--active")
        ? (this.#activeWidth = slide.getBoundingClientRect().width)
        : (this.#regularWidth = slide.getBoundingClientRect().width);
      slide.style.setProperty("transition", "all .6s ease-in-out");
    });

    this.#fontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    this.restartTimer();
  }

  #handleClick(e) {
    if (e.target.closest(".svg")) {
      console.log("card.action");
    }
    if (
      this.#slides.includes(e.target.closest(".card__slide")) &
      !e.target
        .closest(".card__slide")
        ?.classList.contains("card__slide--active")
    ) {
      e.preventDefault();
      const clickedIndex = this.#slides.indexOf(
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
    const transformValue = `translateX(-${
      index * (this.#regularWidth + 2 * this.#fontSize) + this.#activeWidth / 2
    }px)`;
    this.#slides.forEach((slide) => {
      slide.classList.remove("card__slide--active");
      slide
        .querySelector(".carousel-card__text")
        .style.setProperty("font-size", "0.8rem");
      slide
        .querySelector(".card__action")
        .classList.add("card__action--not-active");
      slide.style.setProperty("transform", transformValue);
    });
    this.#slides[index].classList.add("card__slide--active");
    this.#slides[index]
      .querySelector(".carousel-card__text")
      .style.setProperty("font-size", "1.3rem");
    this.#slides[index]
      .querySelector(".card__action")
      .classList.remove("card__action--not-active");
    this.restartTimer();
  }

  moveToNextSlide() {
    this.#currentIndex = (this.#currentIndex + 1) % this.#slides.length;
    this.moveToSlide(this.#currentIndex);
    this.restartTimer();
  }

  moveToPrevSlide() {
    this.#currentIndex =
      (this.#currentIndex - 1 + this.#slides.length) % this.#slides.length;
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

  #initSvgs() {
    this.cards = Array.from(document.querySelectorAll(".card"));
    this.cards.forEach((card) => {
      let svgLike = card.querySelector(".icon-item--heart");
      let svgBookmark = card.querySelector(".icon-item--bookmark");
      if (card.getAttribute("like") === "yes") {
        svgLike.classList.add("icon-item__heart--opened");
      }
      if (card.getAttribute("bookmark") === "yes") {
        svgBookmark.classList.add("icon-item__bookmark--opened");
      }
    });
    this.#handleActionsWithSvgs();
  }

  #handleActionsWithSvgs() {
    /*svgs.forEach(function (icon) {
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
    });*/
  }
}

export default AssortmentView;
