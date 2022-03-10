import Item from "../models/item"
import beerPic from "../pics/beer.png"
import whiteWine from "../pics/whitewine.jpeg"

const ITEMS = [
    new Item(
        'b1',
        {beerPic},
        'Beer',
        'Beer A info.',
        2.99
    ),
    new Item(
        'b2',
        {beerPic},
        'Beer',
        'Beer B info.',
        2.99
    ),
    new Item(
        'b3',
        {beerPic},
        'Beer',
        'Beer C info.',
        2.99
    ),
    new Item(
        'b4',
        {beerPic},
        'Beer',
        'Beer D info.',
        2.99
    ),
    new Item(
        'w5',
        {whiteWine},
        'White wine',
        'White wine info.',
        2.99
    ),
    new Item(
        'w6',
        {whiteWine},
        'White wine',
        'White wine info.',
        2.99
    ),
    new Item(
        'w7',
        {whiteWine},
        'White wine',
        'White wine info.',
        2.99
    )
]

export default ITEMS