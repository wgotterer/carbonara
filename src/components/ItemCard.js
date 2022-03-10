import React from "react";
import "../styling/ItemCard.css"

function ItemCard(props) {
  return (
    <div className="item-container">
      <button className="item-button">Shop now</button>
      <div className="info-container">
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="item-price">{props.price}</div>
      </div>
      <img
        className="item-pic"
        height="140px"
        width="140px"
        src={props.picture}
        alt="drink"
      />
    </div>
  );
}

export default ItemCard;
