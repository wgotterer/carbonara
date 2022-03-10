import React from "react";
import ITEMS from "../data/dummy-data";
import ItemCard from "./ItemCard";

function ItemsList(props) {
  console.log(ITEMS[0].picture);

  const beerFilteredList = ITEMS.filter((item) => item.title === "Beer");

  const beerCards = beerFilteredList.map((card) => {
    return (
      <ItemCard
        title={card.title}
        picture={card.picture}
        description={card.description}
        price={card.price}
      />
    );
  });

  const wineFilteredList = ITEMS.filter((item) => item.title === "White wine");

  const wineCards = wineFilteredList.map((card) => {
    return (
      <ItemCard
        title={card.title}
        picture={card.picture}
        description={card.description}
        price={card.price}
      />
    );
  });

  return (
    <div>
      <h1>Beer</h1>
      {beerCards}
      <h1 ref={props.myRef}>White Wine</h1>
      {wineCards}
    </div>
  );
}

export default ItemsList;
