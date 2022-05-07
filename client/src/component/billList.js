import React from 'react'
import  Axios  from 'axios';

import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap'

function billList() {
    
  return (
    <ListGroup>
        <ListGroupItem>Bill 1</ListGroupItem>
        <div className=''>
            <button className='danger-button' >Delete</button>
        </div>
    </ListGroup>
  )
}

export default billList