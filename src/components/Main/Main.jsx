import React from 'react'
import CardList from '../CardList/CardList'

const Main = ({searchTerm, filterTerm, beersArr}) => {
  
  let searchedBeers;

  if (searchTerm) {
    console.log(searchTerm)
    searchedBeers = beersArr.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm)
    })
  } else if (filterTerm == 'high-alcohol') {
    searchedBeers = beersArr.filter(beer => {
      return beer.abv > 6;
    })
  } else if (filterTerm == 'high-acidity') {
    searchedBeers = beersArr.filter(beer => {
      return beer.ph < 4;
    })
  } else if (filterTerm == 'classic-range') {
    searchedBeers = beersArr.filter(beer => {
      const yearBrewed = beer.first_brewed.split('/')[1]
      return yearBrewed < 2010;
    })
  } else {
    searchedBeers = beersArr;
  }
  
  return (
    <div>
      <CardList beersArr={searchedBeers} />
    </div>
  )
}

export default Main;