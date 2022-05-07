import React from 'react'
import { Link } from 'react-router-dom'

function Productline() {
  return (
    <div className='main-container'>
      <nav className='second-nav'>
        <p>My productlines</p>
        <Link to="/addProductLine">Add ProductLine</Link>
      </nav>
    </div>
  )
}

export default Productline