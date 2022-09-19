import React, { useState } from 'react'

const AddTask = () => {
  const [value, setValue] = useState ('')
  const addItem  = ()=> {
    console.log(value)
  }
  return (
    <>
        <div className='input-container'>
            <input type='text' className='input' placeholder='Add a new task' 
            onChange={(e) => {
              setValue(e.target.value)
            }}
            />

            
            <button onClick={addItem} className='btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask