import React from 'react'
import Card from '../Card/Card'
import './CardList.scss'

const CardList = ({beersArr}) => {
  const beerCardJSX = beersArr.map(beer => {
    return <Card key={beer.id} name={beer.name} description={beer.description} abv={beer.abv} image={beer.image_url} />
  })

  // const filteredBeerCardJSX = beersFiltered.map(beer => {
  //   return <Card key={beer.id} name={beer.name} description={beer.description} abv={beer.abv} image={beer.image_url} />
  // })

  return (
    <div className='cardList'>
      {beerCardJSX}
    </div>
  )
}

export default CardList