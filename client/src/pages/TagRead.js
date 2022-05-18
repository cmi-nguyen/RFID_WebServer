import React from 'react'

import TagList from '../component/TagList'

function TagRead() {
  return (
    <div className='main-container'>
      <nav className='second-nav'>
        <p>My tags</p>
        
      </nav>
      <TagList/>
    </div>
  )
}

export default TagRead