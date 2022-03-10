import React from 'react'

 function ItemCard(props) {
    return (
        <div className="item-container">
        <h3>{props.title}</h3>
        </div>
    )
}

export default ItemCard