import React from 'react'

const Task = ({id, title ,body}) => {
  return (
    <div className='m-[5%] m p-[20%] bg-gray-600 rounded-[20px] flex flex-col '>
        <h3 className='w-screen m-0'>{title} </h3>
        <p>{body} </p>
      
    </div>
  )
}

export default Task
