import React from 'react'

import ProductLineList from '../component/ProductLineList'

function Productline() {
  return (
    <div className='main-container'>
      <nav className='second-nav'>
        <p>My productlines</p>
      </nav>
      <ProductLineList/>
    </div>
  )
}

export default Productline