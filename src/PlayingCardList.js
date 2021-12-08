import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clear] = useAxios("cards", API_BASE_URL);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
