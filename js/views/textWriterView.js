class TextWriter {
  #heading;
  #text = "";
  #isBlinking = true;
  #cursor;
  #typingTimeout = 200;
  #waitTimeout = 3000;
  #i = 0;

  constructor() {
    this.listOfWords = ["будівництва", "оселі", "продажу"];
    this.#heading = document.querySelector(".heading--highlited__text-writer");
    this.#cursor = document.querySelector(".cursor");
    this.#mainFunc();
  }

  async #mainFunc() {
    try {
      console.log("\nStart");
      await this.changeWord(0);
      await this.changeWord(1);
      await this.changeWord(2);
      this.#mainFunc();
    } catch (error) {
      console.log(error);
    }
  }

  async changeWord(wordIndex) {
    try {
      await this.letterAdd(wordIndex);
      await this.cursorStart();
      await this.cursorStop();
      await this.letterMinus(wordIndex);
    } catch (error) {
      console.log(error);
    }
  }

  async letterAdd(wordIndex) {
    return new Promise((resolve) => {
      const addLetter = () => {
        setTimeout(() => {
          this.#text += this.listOfWords[wordIndex][this.#i];
          this.#heading.textContent = this.#text;
          this.#i++;
          if (this.#i < this.listOfWords[wordIndex].length) {
            addLetter();
          } else {
            this.#i=0;
            resolve();
          }
        }, this.#typingTimeout);
      };
      addLetter();
    });
  }

  async cursorStart() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.#blinkCursor();
        console.log("cursorStart");
        resolve();
      },0);
    });
  }

  async cursorStop() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("cursorStop");
        this.#stopCursor();
        resolve();
      }, this.#waitTimeout);
    });
  }

  async letterMinus(wordIndex) {
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
      this.#cursor.style.setProperty("width", isVisible ? "0.3rem" : "0");
      isVisible = !isVisible;
      setTimeout(() => requestAnimationFrame(blink), 600);
    };
    requestAnimationFrame(blink);
  }

  #stopCursor() {
    this.#isBlinking = false;
    this.#cursor.style.setProperty("width", "0.3rem");
    console.log("cursor stopped");
  }

  /*this.index = {
      letter: 0,
      word: 0,
      action: "add",
    };*/

  
}

export default new TextWriter()