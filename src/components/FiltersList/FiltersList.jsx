import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import './FiltersList.scss'

const FiltersList = ({handleFilterABV, handleFilterClassic, handleFilterPH}) => {
  return (
    <div className='filter'>
      <FilterItem />
      <fieldset className='filter__content'>
      <legend>Filter by:</legend>
      <div>
        <input onClick={handleFilterABV} type="checkbox" id="high-alcohol" name="high-alcohol" />
        <label>High Alcohol</label>
      </div>
      <div>
        <input onClick={handleFilterClassic} type="checkbox" id="classic-range" name="classic-range" />
        <label>Classic range</label>
      </div>
      <div>
        <input onClick={handleFilterPH} type="checkbox" id="high-acidity" name="high-acidity" />
        <label>High acidity</label>
      </div>
    </fieldset>
    </div>
  )
}

export default FiltersList