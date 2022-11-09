import React from 'react'

function AddWard() {
  return (
    <div className='main'>
        <form>
        <input type="text" placeholder = "tell use new ward name"></input>
        <input type = "text" placeholder = "details about ward"></input>
        <input type="number" min="1" max="50" step="1"></input>
        <button type='submit'>Add ward</button>
        </form>
        </div>
  )
}

export default AddWard