import React from 'react'
import CardList from '../CardList/CardList'
import beers from '../../data/data'

const Main = ({searchTerm}) => {

  const filteredBeers = beers.filter(beer => {
    return beer.name.toLowerCase().includes(searchTerm) && beer.image_url;
  })

  return (
    <div>
      <CardList beersArr={filteredBeers} />
    </div>
  )
}

export default Main