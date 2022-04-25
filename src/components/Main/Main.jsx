import React from 'react'
import CardList from '../CardList/CardList'

const Main = ({searchTerm, beersArr, filterPH}) => {
  
  let searchedBeers;

  if (searchTerm) {
    console.log(searchTerm)
    searchedBeers = beersArr.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm)
    })
  } else {
    searchedBeers = beersArr;
  }

  if (filterPH) {
    searchedBeers = searchedBeers.filter(beer => {
      return beer.ph < 4;
    })
  }
  
  return (
    <div>
      <CardList beersArr={searchedBeers} />
    </div>
  )
}

export default Main;