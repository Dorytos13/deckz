import Deck from "./Deck.js";

const options = {
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    suits: ["Hearts", "Diamonds", "Spades", "Clubs"]
};

new Deck(options).createFullDeck().shuffleCards().displayCards();