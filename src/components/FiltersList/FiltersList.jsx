import React from 'react'
import FilterItem from '../FilterItem/FilterItem'

const FiltersList = ({filterTerm, handleFilter}) => {
  return (
    <div>
      <FilterItem />
      <fieldset>
      <legend>Filter by:</legend>
      <div>
        <input onClick={handleFilter} type="checkbox" id="high-alcohol" name="high-alcohol" />
        <label>High Alcohol</label>
      </div>
      <div>
        <input onClick={handleFilter} type="checkbox" id="classic-range" name="classic-range" />
        <label>Classic range</label>
      </div>
      <div>
        <input onClick={handleFilter} type="checkbox" id="high-acidity" name="high-acidity" />
        <label>High acidity</label>
      </div>
    </fieldset>
    </div>
  )
}

export default FiltersList