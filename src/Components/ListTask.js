import React from 'react'

const ListTask = ({task}) => {
  return (
    <>
  <div className='list-task'>
    {task.title}
    <button className='del-btn'>Delete</button>
  </div>
    </>
  )
}

export default ListTask