import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({image, name, description, abv, id, first_brewed, ph}) => {
  const beerJSX = (
    <Link to={`/card/${id}`}>
      <section className="card">
        <div className="card__imagediv">
          <img src={image} alt="beer" className="card__image" />
        </div>
        <div className="card__content">
          <h3 className="card__heading">{name}</h3>
          <p className="card__info">{description}</p>
          <p className="card__strength">{abv}%</p>
        </div>
      </section>
    </Link>
  )

  return (
    <>
      {beerJSX}
    </>
  )
}

export default Card