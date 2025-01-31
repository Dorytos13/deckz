//Ce module doit exporter une classe Deck qui doit pouvoir faire les choses suivantes :
//OPTION DU DECK : deux propriétés du constructeur : values et suits. Ces 2 propriétés contiennent un tableau avec les valeurs et atouts des cartes disponibles
//CREATION DES CARTES : doit avoir un tableau cards[] dans lequel sont stockées chaque carte. créer une méthode createFullDeck() qui génère une carte par combinaison possible. Pour cela on devra avoir créer new Card(value, suit);
//AFFICHER LES CARTES : méthode displayCards() qui à partir du tab cards[] affiche chacune en faisant appel à la méthode display() de Card
//MELANGER LES CARTES : réaffecter aléatoirement chaque index du tablleau cards[] pour simplifier on fait appel à Lodash. -> importer puis utiliser la fonction

import Card from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

class Deck {

    #cards = []; //private property

    constructor(options) {
        this.values = options.values;
        this.suits = options.suits;
    }

    createFullDeck() {
        this.values.forEach(value => { //pour chaque valeur
            this.suits.forEach(suit => { //pour chaque couleur
                this.#cards.push(new Card(value, suit)); //on ajoute une carte
            });
        });
        return this; //on retourne l'objet pour pouvoir ench
    }

    displayCards() { 
        this.#cards.forEach(card => { //pour chaque carte
            card.display(); //on affiche la carte
        });
        return this; 
    }

    shuffleCards() {
        this.#cards = shuffle(this.#cards); //on mélange les cartes
        return this; 
    }
}

export default Deck; //on exporte la classe Deck