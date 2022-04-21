import React from 'react'
import FiltersList from '../FiltersList/FiltersList'
import SearchBox from '../SearchBox/SearchBox'
import './Navbar.scss'

const Navbar = ({searchTerm, handleInput}) => {
  
  return (
    <div className='navbar'>
      <h1 className="navbar__title">Punk API</h1> 
      <SearchBox label="Search for a beer: " searchTerm={searchTerm} handleInput={handleInput}/>
      <FiltersList />
    </div>
  )
}

export default Navbar;