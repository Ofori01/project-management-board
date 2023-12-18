import React from 'react'

const Task = ({id, title ,body}) => {
  return (
    <div className='m-[5%] m p-[20%] bg-gray-600 rounded-[20px] flex flex-col '>
        <strong> <h3 className='w-[100%] mb-2'>{title} </h3> </strong>
        <p>{body} </p>
      
    </div>
  )
}

export default Task
