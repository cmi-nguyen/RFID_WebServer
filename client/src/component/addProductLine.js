import React from 'react'

function addProductLine() {
  return (
    <div>
        <form>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"></input>
        </form>
    </div>
  )
}

export default addProductLine