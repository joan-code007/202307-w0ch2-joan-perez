const generateCards = () => {
  const suits = ["Picas", "Tréboles", "Diamantes", "Corazones"];
  const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let deckOfCards = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cardNumbers.length; j++) {
      let card = {
        suits: suits[i],
        cardNumbers: cardNumbers[j],
      };
      deckOfCards.push(card);
    }
  }

  return deckOfCards;
};
playDeck = generateCards();

const getrandomCard = (playdeck) => {
  const randomCard = playdeck[Math.floor(Math.random() * playdeck.length)];
  console.log(`Tu carta es : ${randomCard}`);
  return randomCard;
};

const hiddeElements = () => {
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
};

const firstPage = document.querySelector(".start__container");
const secondPage = document.querySelector(".second__page");
const startButton = document.querySelector(".button__start");

startButton.addEventListener("click", hiddeElements);
