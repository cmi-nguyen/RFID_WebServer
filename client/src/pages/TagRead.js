import React from 'react'
import { Link } from 'react-router-dom'

function TagRead() {
  return (
    <div className='main-container'>
      <nav className='second-nav'>
        <p>My tags</p>
        <Link to="/addtag">Add tag</Link>
      </nav>
    </div>
  )
}

export default TagRead