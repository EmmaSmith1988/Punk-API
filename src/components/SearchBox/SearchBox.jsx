import React from 'react'
import './SearchBox.scss'

const SearchBox = ({label, searchTerm, handleInput}) => {
  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label"></label>
      <input placeholder={label} type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input" />
    </form>
  )
}

export default SearchBox