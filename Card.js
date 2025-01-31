class Card { 
    constructor(value, suit) { 
      this.value = value; // “A”, 2, 3, 4, 5, 6, 7, 8, 9, 10, “J”, “Q”, “K”
      this.suit = suit; //“Hearts”, “Diamonds”, “Clubs”, “Spades”
      this.element = this.#generateCardElement(); //propriété contenant l’élément HTML représentant la carte
    }
  
    display() { //Méthode publique qui insère l’élément HTML dans l'élément div class="deck"
      document.querySelector(".deck").appendChild(this.element);
      this.element.addEventListener("click", this.#toggleHidden.bind(this));
      return this;
    }
  
  
    #generateCardElement() { //Méthode privée qui génère l’élément HTML représentant la carte
      const card = document.createElement("div");
      card.dataset.value = this.value;
      card.dataset.suit = this.suit;
  
      card.classList.add("card");
      card.classList.add("hidden");
      card.classList.add(`v${this.value}`);
      card.classList.add(this.suit.toLowerCase());
  
      const interior = document.createElement("div");
      interior.classList.add("interior");
      interior.insertAdjacentHTML("afterbegin", this.#generateCardInterior());
      card.appendChild(interior);
      return card;
    } //le résultat de cette fonction est appelée dans le constructeur pour assigner un élémentà la propriété this.element
  
  
    #generateCardInterior() { //Méthode privée qui génère le contenu de l’élément HTML représentant la carte
      if (!isNaN(this.value)) {
        let html = "";
        for (let i = 1; i <= this.value; i++) {
          html += `<div class="symbol"></div>`;
        }
        return html;
      } else {
        return `<div class="title">${this.value}</div>`;
      }
    } //le résultat de cette fonction est appelée dans la méthode #generateCardElement pour générer le contenu de l’élément HTML représentant la carte

    #toggleHidden() { //Méthode privée qui permet de basculer la classe “hidden” de l’élément HTML représent
      this.element.classList.toggle("hidden");
    }
  }
  
  export default Card;
  