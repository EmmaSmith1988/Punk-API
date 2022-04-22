import React from 'react'

const SearchBox = ({label, searchTerm, handleInput}) => {
  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">{label}</label>
      <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input" />
    </form>
  )
}

export default SearchBox