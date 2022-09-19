import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import './Todo.css'

const Todo = () => {
  const [tasks, setTasks] = useState ([
    {title : 'Learn React'}
  ])

  const addTask = (title) => {
    const newTask = [...tasks, {title}]
    setTasks(newTask)
  }
  return (
    < >
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
                <AddTask addTask={addTask} />
            </div>
            <div className='tasks'>
              {tasks.map((task) => (
                <ListTask task={task}/>
              ))}
                
            </div>
        </div>
    </>
  )
}

export default Todo