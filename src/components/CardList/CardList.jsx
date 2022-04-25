import React from 'react'
import Card from '../Card/Card'
import './CardList.scss'

const CardList = ({beersArr}) => {
  const beerCardJSX = beersArr.map(beer => {
    return <Card key={beer.id} ph={beer.ph} first_brewed={beer.first_brewed} name={beer.name} description={beer.description} abv={beer.abv} image={beer.image_url} id={beer.id} />
  })

  return (
    <div className='cardList'>
      {beerCardJSX}
    </div>
  )
}

export default CardList