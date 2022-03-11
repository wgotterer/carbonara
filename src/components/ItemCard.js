import React from "react";
import "../styling/ItemCard.css";

function ItemCard(props) {
  return (
    <div className="item-container">
      <div className="info-container">
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="price-button-container">
          <div className="item-price">{props.price}</div>
          <button className="item-button">Buy now</button>
        </div>
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
