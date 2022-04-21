import React from 'react'
import './Card.scss'

const Card = ({image, name, description, abv}) => {
  return (
    <section className="card">
      <img src={image} alt="" className="card__image" />
      <div className="card__content">
        <h3 className="card__heading">{name}</h3>
        <p className="card__info">{description}</p>
        <p className="card__strength">{abv}%</p>
      </div>
    </section>
  )
}

export default Card