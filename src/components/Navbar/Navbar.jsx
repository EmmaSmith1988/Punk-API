import React from 'react'
import FiltersList from '../FiltersList/FiltersList'
import SearchBox from '../SearchBox/SearchBox'
import './Navbar.scss'
import heading from '../../assets/brewdog.png'
import { Link } from 'react-router-dom'

const Navbar = ({searchTerm, handleInput, handleFilterABV, handleFilterClassic, handleFilterPH}) => {
  
  return (
    <div className='navbar'>
      <Link to='/'>
        <img className="navbar__title" src={heading}></img>
      </Link>
      <div className="navbar__search">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
        <FiltersList handleFilterABV={handleFilterABV} handleFilterClassic={handleFilterClassic} handleFilterPH={handleFilterPH}/>
      </div>
    </div>
  )
}

export default Navbar;