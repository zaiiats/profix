class TextWriter {
  #heading;
  #text = "";
  #isBlinking = true;
  #cursor;
  #typingTimeout = 200;
  #waitTimeout = 3000;
  #i = 0;
  #heightOfCursor;

  constructor() {
    this.listOfWords = ["будівництва", "оселі", "продажу"];
    this.#heading = document.querySelector(".text-writer__heading--highlited");
    this.#cursor = document.querySelector(".text-writer__cursor");
    this.#mainFunc();

  }
  async #mainFunc() {    
    try {
      for (let i = 0; i < this.listOfWords.length; i++) {
        await this.#changeWord(i);
      }
      this.#mainFunc();
    } catch (error) {
      console.log(error);
    }
  }

  async #changeWord(wordIndex) {
    try {
      await this.#letterAdd(wordIndex);
      await this.#cursorStart();
      await this.#cursorStop();
      await this.#letterMinus(wordIndex);
    } catch (error) {
      console.log(error);
    }
  }

  async #letterAdd(wordIndex) {
    return new Promise((resolve) => {
      const addLetter = () => {
        setTimeout(() => {
          this.#text += this.listOfWords[wordIndex][this.#i];
          this.#heading.textContent = this.#text;
          this.#i++;
          if (this.#i < this.listOfWords[wordIndex].length) {
            addLetter();
          } else {
            this.#i = 0;
            resolve();
          }
        }, this.#typingTimeout);
      };
      addLetter();
    });
  }

  async #cursorStart() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.#blinkCursor();
        resolve();
      }, 0);
    });
  }

  async #cursorStop() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.#stopCursor();
        resolve();
      }, this.#waitTimeout);
    });
  }

  async #letterMinus(wordIndex) {
    return new Promise((resolve) => {
      const addMinus = () => {
        setTimeout(() => {
          this.#text = this.#text.slice(0, -1);
          this.#heading.textContent = this.#text;
          this.#i++;
          if (this.#i < this.listOfWords[wordIndex].length) {
            addMinus();
          } else {
            this.#i = 0;
            resolve();
          }
        }, this.#typingTimeout);
      };
      addMinus();
    });
  }

  #blinkCursor() {
    let isVisible = false;
    this.#isBlinking = true;
    const blink = () => {
      if (!this.#isBlinking) return;
      this.#cursor.style.setProperty("width", isVisible ? "0.4rem" : "0");
      isVisible = !isVisible;
      setTimeout(() => requestAnimationFrame(blink), 600);
    };
    requestAnimationFrame(blink);
  }

  #stopCursor() {
    this.#isBlinking = false;
    this.#cursor.style.setProperty("width", "0.4rem");
  }
}

export default new TextWriter();
