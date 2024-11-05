const suits = ["H", "D", "C", "S"];
const values = [
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"
];

const deck = [];

for (let suit of suits) {
  for (let value of values) {
    deck.push(`${suit}${value}`);
  }
}

export const cardDeck = deck;