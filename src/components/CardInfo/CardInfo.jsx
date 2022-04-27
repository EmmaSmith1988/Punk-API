import React from 'react'
import "./CardInfo.scss";
import { useParams } from "react-router";
import { Link } from 'react-router-dom'

const CardInfo = ({beersArr}) => {
  const {cardId} = useParams();
  const singleBeer = beersArr.find(x => parseInt(x.id) === parseInt(cardId))
  const food_pairingsJSX = singleBeer.food_pairing.map(pairing => {
    return <li key={pairing}>{pairing}</li>
  })
  return (
    <article className="card-info">
      <div className="card-info__left">
        <img src={singleBeer.image_url} alt="beer" className="card-info__image" />
        <p className="card-info__abv">ABV {singleBeer.abv}%</p>
      </div>
      <div className="card-info__main">
        <h1 className="card-info__heading">{singleBeer.name}</h1>
        <p className="card-info__tagline">"{singleBeer.tagline}"</p>
        <p className="card-info__desc">{singleBeer.description}</p>
        <p className="card-info__pairings">Food Pairings:</p>
        <p className="card-info__list">{food_pairingsJSX}</p>
        <Link to='/'>
          <button className="card-info__button">Back</button>
        </Link>
      </div>
      
    </article>
  )
}

export default CardInfo