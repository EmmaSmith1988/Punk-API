import React from 'react'
import FiltersList from '../FiltersList/FiltersList'
import SearchBox from '../SearchBox/SearchBox'
import './Navbar.scss'
import heading from '../../assets/brewdog.png'

const Navbar = ({searchTerm, handleInput, handleFilterABV, handleFilterClassic, handleFilterPH}) => {
  
  return (
    <div className='navbar'>
      <img className="navbar__title" src={heading}></img>
      <div className="navbar__search">
        <SearchBox label="Search for a beer... " searchTerm={searchTerm} handleInput={handleInput}/>
        <FiltersList handleFilterABV={handleFilterABV} handleFilterClassic={handleFilterClassic} handleFilterPH={handleFilterPH}/>
      </div>
    </div>
  )
}

export default Navbar;