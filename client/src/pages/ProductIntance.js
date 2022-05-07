import React from 'react'
import { Link } from 'react-router-dom'



function ProductIntance() {
  return (
    <div className='main-container'>
      <nav className='second-nav'>
        <p>My product intances</p>
        <Link to="/addproductintance">Add product intance</Link>
      </nav>
    </div>
  )
}

export default ProductIntance