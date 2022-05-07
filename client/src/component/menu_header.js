import React from 'react'
import { Link } from 'react-router-dom'


function menu_header() {
  return (
    <nav className='main-menu'>
        <ul>
          <li>
            <Link to="/bill">Bill</Link>
          </li>
          <li>
            <Link to="/productline">Product line</Link>
          </li>
          <li>
            <Link to="/productintance">Product intance</Link>
          </li>
          <li>
            <Link to="/tagread">Tag</Link>
          </li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
        </ul>
      </nav>
      
  )
}

export default menu_header