class AssortmentView {
  #family;
  #items;
  #types;
  #labels;

  constructor() {
    this.sidebar = document.querySelector(".sidebar");
    this.assortment = document.querySelector(".assortment");
    this.#family;
    this.#items = [];
    this.#types = [];
    this.#labels = [];
  }

  #initAssortment() {
    console.log(1);
    
    this.#family = this.assortment.getAttribute("family");
    console.log(2);
    
    this.data.map((item) => {
      if (item.family == this.#family) this.#items.push(item);
    });
    this.#items.map((item) => {
      if (!this.#types.includes(item.type)) {
        this.#types.push(item.type);
        this.#labels.push(item.label);
      }
    });

    console.log(3);
    
    this.#insertSidebarAndLabels();
    this.#insertHtml();
    console.log(4);
    

    let images = document.querySelectorAll("card__img");
    
    this.checkImagesLoadedAndExecute(images, () => {
      
    });

    console.log(5);
    

    this.assortment.addEventListener("mouseenter",(e) => {
      if (e.target.classList.contains('card')) {
        let card = e.target.closest(".card") || e.target.classList.contains('card')
        card.querySelector(".card__action").classList.remove("card__action--not-active");
      }
    },true);

    this.assortment.addEventListener("mouseleave",(e) => {
      if (e.target.classList.contains('card')) {
        let card = e.target.closest(".card") || e.target.classList.contains('card')
        card.querySelector(".card__action").classList.add("card__action--not-active");
      }
    },true);

    this.sidebar.addEventListener('click',this.#moveToItem.bind(this))
    console.log(6);
    
    setTimeout(this.#moveToItem.bind(this),1000);

  }

  #insertSidebarAndLabels() {
    let htmlForSidebar = "";
    let htmlForLabels = "";

    this.#labels.forEach((label, i) => {
      htmlForSidebar += `<a type="#${this.#types[i]}" class="sidebar__item">${label}</a>`;
      htmlForLabels += `<div class="assortment__name" id="${this.#types[i]}">${label}</div>
        <div class="assortment_bar"></div>`;
    });
    this.sidebar.insertAdjacentHTML("beforeend", htmlForSidebar);
    this.assortment.insertAdjacentHTML("beforeend", htmlForLabels);
  }

  #insertHtml() {
    let html = "";
    this.assortmentBar = document.querySelectorAll(".assortment_bar");
    this.#labels.forEach((label, i) => {
      let currentItems = [];
      this.#items.forEach((item) => {
        if (item.label == label) {
          html += `
            <a productId="${item.id}" class="card" aria-label="card" item="priklad" like="${item.like}" bookmark="${item.bookmark}">
              <div class="card__action card__action--not-active">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-item--like svg svg__card">
                  <path d="m19.4626 3.99415c-2.6817-1.64492-5.0222-.98204-6.4282.07386-.5766.43295-.8648.64942-1.0344.64942s-.4578-.21647-1.0344-.64942c-1.40598-1.0559-3.74651-1.71878-6.42816-.07386-3.51937 2.15879-4.315719 9.28075 3.80209 15.28925 1.54619 1.1444 2.31927 1.7166 3.66047 1.7166s2.1143-.5722 3.6605-1.7166c8.1178-6.0085 7.3214-13.13046 3.8021-15.28925z"/>
                </svg>
                <svg viewBox="0 0 24 24" w xmlns="http://www.w3.org/2000/svg" class="icon-item--bookmark svg svg__card">
                  <path d="m4 17.9808v-8.27327c0-3.63337 0-5.45005 1.17157-6.57879 1.17158-1.12874 3.05719-1.12874 6.82843-1.12874 3.7712 0 5.6569 0 6.8284 1.12874 1.1716 1.12874 1.1716 2.94542 1.1716 6.57879v8.27327c0 2.3059 0 3.4588-.7728 3.8715-1.4967.7991-4.304-1.8671-5.6372-2.6699-.7732-.4656-1.1598-.6984-1.59-.6984s-.8168.2328-1.59.6984c-1.3332.8028-4.14053 3.469-5.63715 2.6699-.77285-.4127-.77285-1.5656-.77285-3.8715z"/>
                </svg>
              </div>
              <div class="card__img-box">
                <img class="card__img" srcset="../../img/${item.family}-1x.png 1x, ../../img/${item.family}-2x.png 2x" alt="${item.family}">
              </div>
              <div class="card__info">
                <div class="card__divider"></div>
                <div class="card__text">${item.name}</div>
              </div>
            </a>
          `;
        }
      });
      this.assortmentBar[i].insertAdjacentHTML("beforeend", html);
      html = "";
    });
  }

  #moveToItem(e){
    console.log('move');
    
    console.log(e);
    
    
    let bar;
    let url;
    let hash;
    if (e) {
      e.preventDefault();
      url = e.target.getAttribute('type')
    }
    else url = window.location.href;
    console.log(url);
    hash = url.slice(url.indexOf("#"));
    console.log(hash);
    if (hash === '/') return;
    else{
      bar = this.assortment.querySelector(hash);
      console.log(bar);

      if (bar) {
        const y = bar.getBoundingClientRect().top + window.scrollY - 9 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        
        window.scroll({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }

  setData(data) {
    this.data = data;
    if (document.querySelector(".assortment")) this.#initAssortment();
  }


  checkImagesLoadedAndExecute(images, callback) {
    let loadedImagesCount = 0;

    images.forEach(img => {
      if (img.complete && img.naturalHeight !== 0) {
        loadedImagesCount++;
      } else {
        img.addEventListener('load', () => {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            callback();
          }
        });
      }
    });

    if (loadedImagesCount === images.length) {
      callback();
    }
  }




}

export default AssortmentView;