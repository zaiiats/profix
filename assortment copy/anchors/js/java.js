// Load page
document.addEventListener("DOMContentLoaded", function() {

});

// Nav functionality (buttons)
document.querySelectorAll(".button_nav").forEach(function(button) {
  const dropdownMenu = button.querySelector(".dropdown_menu");
  const arrow = button.querySelector("svg");
  const topMenu = button.querySelector(".top_menu");
  const dividerAccount = button.querySelector(".divider_menu");
  const accountWrapper = button.querySelector(".wrapper_section");

  let isOpenedMenu = false;

  button.addEventListener("mouseenter", function() {
    Open();
  });

  topMenu.addEventListener("click", function() {
    if (isOpenedMenu) {
      Close();
    } else {
      Open();
    }
  });

  button.addEventListener("mouseleave", function() {
    Close();
  });

  const Open = function() {
    button.classList.add("opened_button");
    if (accountWrapper) {
      accountWrapper.classList.add("show_wrapper_section");
    }
    if (dividerAccount) {
      dividerAccount.classList.add("show_divider_menu");
    }
    dropdownMenu.classList.add("show_dropdown");
    arrow.classList.add("show_svg");
    topMenu.classList.add("show_top_menu");
    
    isOpenedMenu = true;
  };

  const Close = function() {
    button.classList.remove("opened_button");
    if (accountWrapper) {
      accountWrapper.classList.remove("show_wrapper_section");
    }
    if (dividerAccount) {
      dividerAccount.classList.remove("show_divider_menu");
    }
    dropdownMenu.classList.remove("show_dropdown");
    arrow.classList.remove("show_svg");
    topMenu.classList.remove("show_top_menu");
    
    isOpenedMenu = false;
  };  
});

// Nav functionality (visibility of buttons)
window.addEventListener("scroll", function(element){
  if ((window.scrollY || window.pageYOffset) > 0) {
    document.querySelector("nav").style.setProperty("background-color", "var(--background2)")
    document.querySelector("nav").style.setProperty("backdrop-filter", "blur(30px)")
  } else {
    document.querySelector("nav").style.removeProperty("background-color", "var(--background2)")
    document.querySelector("nav").style.removeProperty("backdrop-filter", "blur(30px)")
  };
});

// Switch button (checkbox)
let baseUrl = console.log(window.location.origin);

let isOpenedToggle = true; 
const root = document.querySelector(":root");
const wrapper = document.querySelector(".wrapper")

document.querySelector(".check-toggle-round-flat").addEventListener("click", function(){
  if (isOpenedToggle) {
    
    root.style.setProperty("--main-bg-color", "#EDEFFF");
    root.style.setProperty("--secondary-bg-color", "#c8d8ff")
    root.style.setProperty("--third-bg-color", "#6e8cde")
    root.style.setProperty("--fourth-bg-color", "#b5b5b5")
    root.style.setProperty("--fifth-bg-color", "#292929")
    root.style.setProperty("--white-color-text", "#000");
    root.style.setProperty("--black-color-text", "#fff");
    root.style.setProperty("--background", "rgba(255,255,255,0.5)");
    root.style.setProperty("--background3", "rgba(237, 239, 255, 0.9)");
    wrapper.style.background = "url(../../img/white_pattern.png) repeat";
    wrapper.style.backgroundSize = "13rem";
    document.querySelectorAll(".thin").forEach(function(element){element.style.fontWeight = "550";});
    document.querySelector(".logo_image").src = "/img/logo_no_border.png";
    document.querySelector(".footer_logo_img").src = "/img/logo_no_border.png";
  } else {
    
    root.style.setProperty("--main-bg-color", "#04070E");
    root.style.setProperty("--secondary-bg-color", "#24386B")
    root.style.setProperty("--third-bg-color", "#111c39")
    root.style.setProperty("--fourth-bg-color", "#292929")
    root.style.setProperty("--fifth-bg-color", "#b5b5b5")
    root.style.setProperty("--white-color-text", "#fff");
    root.style.setProperty("--black-color-text", "#000");
    root.style.setProperty("--background", "rgba(0,0,0,0.7)");
    root.style.setProperty("--background3", "rgba(4, 7, 14, 0.9)");
    wrapper.style.background = "url(../../img/black_pattern.png) repeat";
    wrapper.style.backgroundSize = "13rem";
    document.querySelectorAll(".thin").forEach(function(element){element.style.fontWeight = "300";});
    document.querySelector(".logo_image").src = "/img/logo_border.png";
    document.querySelector(".footer_logo_img").src = "/img/logo_border.png";
  }
  isOpenedToggle = !isOpenedToggle;
});

// Card element
document.querySelectorAll(".card").forEach(function(card) {
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
});

// Moving through cards by nav
document.querySelectorAll(".side_item").forEach(function(side_item){
  const type = side_item.getAttribute("type");

  const assortmentName = document.querySelectorAll(`.assortment_name[type="${type}"]`);
  assortmentName.forEach(function(el) {
    side_item.addEventListener("click", function(event) {
      event.preventDefault();
      
      const offset = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      
      const targetScrollPosition = el.getBoundingClientRect().top - offset;
      
      window.scrollTo({
        top: window.pageYOffset + targetScrollPosition,
        behavior: "smooth"
      });
    });
  });
});



const footer = document.querySelector("footer");
document.addEventListener("scroll", function() {
  var section = document.querySelector(".section");
  var stickyDiv = section.querySelector(".sticky-div");
  
  if (window.scrollY >= section.offsetTop && window.scrollY < footer.offsetTop - window.innerHeight) {
    stickyDiv.classList.add("sticky");
  } else {
    stickyDiv.classList.remove("sticky");
  }
});

