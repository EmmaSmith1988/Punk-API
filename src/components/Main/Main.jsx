import React from 'react'
import CardList from '../CardList/CardList'
import beers from '../../data/data'

const Main = ({searchTerm, filterTerm}) => {

  const searchedBeers = beers.filter(beer => {
    return beer.name.toLowerCase().includes(searchTerm) && beer.image_url;
  })

  const filteredBeers = beers.filter(beer => {
    const yearBrewed = beer.first_brewed.split('/')[1]
    if (filterTerm == 'high-alcohol') {
      return beer.abv > 6;
    } else if (filterTerm == 'classic-range') {
      return yearBrewed < 2010;
    } else if (filterTerm == 'high-acidity') {
      return beer.ph < 4;
    } else {
      return beer;
    }
  })

  console.log(filteredBeers);

  return (
    <div>
      <CardList beersArr={searchedBeers} beersFiltered={filteredBeers} />
    </div>
  )
}

export default Main