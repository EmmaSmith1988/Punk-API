import React from 'react'
import './SearchBox.scss'
import magnifyingGlass from '../../assets/search.png'

const SearchBox = ({searchTerm, handleInput}) => {
  return (
    <form className="search-box">
      <input placeholder='  Search for a beer...' type="text" value={searchTerm} onInput={handleInput} className="search-box__input" />
    </form>
  )
}

export default SearchBox

{/* <img src={magnifyingGlass} alt="" /> */}