class ThemeSwitchFunctionalityView {
  #themeSwitchCheckbox;
  #svgs;
  #oval;
  #isSwitched;
  #wrapper;
  constructor() {
    this.#themeSwitchCheckbox = document.querySelector(".theme-switch__checkbox");
    this.#svgs = document.querySelectorAll(".theme-switch__svg");
    this.#oval = document.querySelector(".theme-switch__oval");
    this.#wrapper = document.querySelector('.wrapper')
    this.#isSwitched = false;
    this.#initSwitch();
  }
  #initSwitch(){
    this.#themeSwitchCheckbox.addEventListener('change',(e)=>{
      
      if (e.target.checked) this.#changeTheme.apply(this,['open']);
      if (!e.target.checked) this.#changeTheme.apply(this,['close']);
      
    })
  }
  #changeTheme(state){
    this.#oval.classList.toggle("theme-switch__oval--active");

    if (state === 'open') {
      document.querySelector('body').style.fontWeight = '600';
      document.querySelector(".slide-item__img--delivery").srcset = 'img/delivery_black-1x.png 1x, img/delivery_black-2x.png 2x';
      this.#wrapper.style.setProperty('background','url(../img/white_pattern.png) repeat');
      this.#wrapper.style.setProperty("background-size", "20rem auto");

      this.setMultipleProperties({
        "--white-color-text": "#000",
        "--beige-color-text": "#222",
        "--black-color-text": "#eee",
        "--main-bg-color": "#eff4ff",
        "--background-smaller": "rgba(255,255,255,0.4)",
        "--background-bigger": "rgba(255,255,255,0.6)",
        "--accent-color": "rgb(220, 66, 66)",
        "--accent-color-darker": "rgb(214, 135, 135)",
        "--accent-color-translucent": "rgba(182, 72, 72,0.1)",
      });

    } else {
      document.querySelector("body").style.fontWeight = "normal";
      document.querySelector(".slide-item__img--delivery").srcset = 'img/delivery_white-1x.png 1x, img/delivery_white-2x.png 2x';
      this.#wrapper.style.setProperty('background','url(../img/black_pattern.png) repeat');
      this.#wrapper.style.setProperty("background-size", "20rem auto");

      this.setMultipleProperties({
        "--white-color-text": "#eee",
        "--beige-color-text": "#c6ccdb",
        "--black-color-text": "#111",
        "--main-bg-color": "#04070E",
        "--background-smaller": "rgba(0,0,0,0.4)",
        "--background-bigger": "rgba(0,0,0,0.9)",
        "--accent-color": "rgb(147, 28, 28)",
        "--accent-color-darker": "rgb(92, 17, 17)",
        "--accent-color-translucent": "rgba(182, 72, 72,0.1)",
      });
    }
  }

  setMultipleProperties(properties) {
    const root = document.documentElement;

    for (const [property, value] of Object.entries(properties)) {
      root.style.setProperty(property, value);
    }
  }
}


export default ThemeSwitchFunctionalityView;