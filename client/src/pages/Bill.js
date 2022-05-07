import React from 'react'
import BillList from '../component/billList'


function Bill() {
  return (
    <div className='main-container'>
      <nav className='second-nav'>
        <p>My bills</p>
        
      </nav>
      <BillList/>
    </div>
  )
}

export default Bill