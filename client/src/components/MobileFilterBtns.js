import React, { useState } from 'react'
import MobileFiltersMenu from './MobileFiltersMenu';
import MobileSortMenu from './MobileSortMenu';



const MobileFilterBtns = () => {
  //This section is the buttons that will open up the filter and sort options menu component
  
  const [showFilterComponent, setShowFilterComponent] = useState(null)

  return (
    <>
    <div className='mobile-filter-section'>
        <button onClick={() => setShowFilterComponent('filter')}>Filters</button>
        <button onClick={() => setShowFilterComponent('sort')}>Sort</button>
    </div>

      {showFilterComponent && showFilterComponent === 'filter' && 
        <MobileFiltersMenu
          showFilterComponent={showFilterComponent}
          setShowFilterComponent={setShowFilterComponent}
        />}

      {showFilterComponent && showFilterComponent === 'sort' && 
      <MobileSortMenu
        showFilterComponent={showFilterComponent}
        setShowFilterComponent={setShowFilterComponent}
      />}

   
   </>
  )
}

export default MobileFilterBtns