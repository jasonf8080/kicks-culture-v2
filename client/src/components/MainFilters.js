import React from 'react'
import FilterDropdownToggle from './FilterDropdownToggle'
import FilterBrands from './FilterBrands'
import FilterPrices from './FilterPrices'
import FilterSearch from './FilterSearch'
import Sort from './Sort'

const MainFilters = () => {
  return (
   <div className='filters-section'>
        <div className='filters'>
            <FilterDropdownToggle filterName='search' filterComponent={<FilterSearch/>}/>
            <FilterDropdownToggle filterName='brand' filterComponent={<FilterBrands/>}/>
            <FilterDropdownToggle filterName='price' filterComponent={<FilterPrices/>}/>
        </div>
        
        <FilterDropdownToggle filterName='sort' filterComponent={<Sort/>}/>
    </div>
  )
}

export default MainFilters