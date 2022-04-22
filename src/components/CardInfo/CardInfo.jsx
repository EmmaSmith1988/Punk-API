import React from 'react'
import "./CardInfo.scss";
import { useParams } from "react-router";

const CardInfo = ({beersArr}) => {
  const {cardId} = useParams();
  const singleBeer = beersArr.find(x => x.id === cardId)
  console.log(cardId);
  console.log(singleBeer);
  return (
    <article className="card-info">
      <div className="card-info__left">
        <img src='' alt="" className="card-info__image" />
        <p className="card-info__abv">ABV</p>
      </div>
      <div className="card-info__main">
        <h1 className="card-info__heading">NAME</h1>
        <p className="card-info__tagline">TAGLINE</p>
        <p className="card-info__desc">DESCRIPTION</p>
        <p className="card-info__pairings">Food Pairings:</p>
        <p className="card-info__list">PAIRINGS</p>
      </div>
    </article>
  )
}

export default CardInfo