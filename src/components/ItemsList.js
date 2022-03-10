import React from 'react'
import ITEMS from '../data/dummy-data'
import ItemCard from './ItemCard'

function ItemsList() {


    const beerFilteredList = ITEMS.filter(item => item.title === "Beer")

    const beerCards = beerFilteredList.map(card => {
        return(
            <ItemCard title={card.title}/>
        )
    })

    const wineFilteredList = ITEMS.filter(item => item.title === "White wine")

    const wineCards = wineFilteredList.map(card => {
        return(
            <ItemCard title={card.title}/>
        )
    })
  
    return (
        <div>
            <h1>Beer</h1>
            {beerCards}
            <h1>White Wine</h1>
            {wineCards}
        </div>
    )
}

export default ItemsList