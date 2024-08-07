// For controling model and views
import navInit from "./views/navInitView.js";
import pageInit from "./views/pageInitView.js";
import navFunc from "./views/navFuncView.js";
import hamburgerFunc from "./views/hamburgerFuncView.js";
import createTextWriter from "./views/textWriterView.js";
import themeSwitchFunc from "./views/themeSwitchFuncView.js";

const startPage = function(){
  pageInit();
  navInit();
  navFunc();
  hamburgerFunc();
  createTextWriter();
  themeSwitchFunc();
};








/* Switch button (checkbox)
let baseUrl = window.location.origin;

let isOpenedToggle = true;
const root = document.querySelector(":root");
const wrapper = document.querySelector(".wrapper");

document
  .querySelector(".check-toggle-round-flat")
  .addEventListener("click", function () {
    if (isOpenedToggle) {
      root.style.setProperty("--main-bg-color", "#EDEFFF");
      root.style.setProperty("--secondary-bg-color", "#c8d8ff");
      root.style.setProperty("--third-bg-color", "#6e8cde");
      root.style.setProperty("--fourth-bg-color", "#b5b5b5");
      root.style.setProperty("--fifth-bg-color", "#292929");
      root.style.setProperty("--white-color-text", "#000");
      root.style.setProperty("--black-color-text", "#fff");
      root.style.setProperty("--background", "rgba(255,255,255,0.5)");
      root.style.setProperty("--background3", "rgba(237, 239, 255, 0.9)");
      wrapper.style.background = "url(../../img/white_pattern.png) repeat";
      wrapper.style.backgroundSize = "13rem";
      document.querySelectorAll(".thin").forEach(function (element) {
        element.style.fontWeight = "550";
      });
      document.querySelector(".logo_image").src = "/img/logo_no_border.png";
      document.querySelector(".footer_logo_img").src =
        "/img/logo_no_border.png";
    } else {
      root.style.setProperty("--main-bg-color", "#04070E");
      root.style.setProperty("--secondary-bg-color", "#24386B");
      root.style.setProperty("--third-bg-color", "#111c39");
      root.style.setProperty("--fourth-bg-color", "#292929");
      root.style.setProperty("--fifth-bg-color", "#b5b5b5");
      root.style.setProperty("--white-color-text", "#fff");
      root.style.setProperty("--black-color-text", "#000");
      root.style.setProperty("--background", "rgba(0,0,0,0.7)");
      root.style.setProperty("--background3", "rgba(4, 7, 14, 0.9)");
      wrapper.style.background = "url(../../img/black_pattern.png) repeat";
      wrapper.style.backgroundSize = "13rem";
      document.querySelectorAll(".thin").forEach(function (element) {
        element.style.fontWeight = "300";
      });
      document.querySelector(".logo_image").src = "/img/logo_border.png";
      document.querySelector(".footer_logo_img").src = "/img/logo_border.png";
    }
    isOpenedToggle = !isOpenedToggle;
  });

// Card element

/*document.querySelectorAll(".card").forEach(function(card) {
  const icons = card.querySelectorAll("i");

  icons.forEach(function(icon) {
    let isClickedIcon = false;

    if (!isClickedIcon) {
      icon.classList.add("unhovered_icon");
    };
    
    icon.addEventListener("mouseenter", function(event) {
      icon.classList.add("hovered_icon");
    });
    icon.addEventListener("mouseleave", function(event) {
      if (!isClickedIcon) {
        icon.classList.remove("hovered_icon");
      }
    });

    icon.addEventListener("click", function(event) {
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

/*const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let timer;

function moveToSlide(index) {
  slides.forEach(slide => slide.classList.remove("active_slide"));
  slides[index].classList.add("active_slide");
  const transformValue = `translateX(-${index * 17 + 10}rem)`;
  slides.forEach(slide => slide.style.setProperty("transform", transformValue));
  restartTimer();
}

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  moveToSlide(currentIndex);
}

function moveToPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveToSlide(currentIndex);
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(moveToNextSlide, 5000);
}



slides.forEach(slide => {
  slide.addEventListener("click", function(){
    if (!slide.classList.contains("active_slide")) {
      const clickedIndex = Array.from(slides).indexOf(slide);
      moveToSlide(clickedIndex);
      currentIndex = clickedIndex;
    };
  });
  
  slide.addEventListener("mouseenter", function() {
    clearInterval(timer);
  });
  
  slide.addEventListener("mouseleave", function() {
    restartTimer();
  });
});

document.querySelector(".next").addEventListener("click", function() {
  moveToNextSlide();
});

document.querySelector(".prev").addEventListener("click", function() {
  moveToPrevSlide();
});

restartTimer();*/