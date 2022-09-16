import React from 'react'

const AddTask = () => {
  return (
    <>
        <div className='input-container'>
            <input type='text' className='input' placeholder='Add a new task'></input>
            <button className='btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask