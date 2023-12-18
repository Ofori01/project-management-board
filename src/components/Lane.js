import React from 'react'
import Task from './Task'

const Lane = ({title, loading, error, tasks}) => {
  return (
    <div className='p-0 bg-gray-300 rounded-[20px] min-h-[50vh] w-[30vh]'>
        <h1 className='w-full pb-[10px] text-center border-b-black border-b'>
            {title}
        </h1>
        {
          loading || error ? (<span> {error || '...Loading'}</span>):
          tasks.map(
            (task)=><Task key={task.id} id={task.id} body={task.body} />
          )
      

        }
      
    </div>
  )
}

export default Lane
