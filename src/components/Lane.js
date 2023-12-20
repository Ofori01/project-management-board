import React from 'react'
import Task from './Task'

const Lane = ({title,laneId, loading, error, tasks, onDragStart, onDragOver, onDrop}) => {
  return (
    <div className='p-0 bg-gray-300 rounded-[20px] min-h-[50vh] w-[50vh]' onDragOver={onDragOver} onDrop={(e)=>onDrop(e,laneId) }>
        <h1 className='w-full pb-[10px] font-bold pt-2 text-center border-b-black border-b'>
            {title}
        </h1>
        {
          loading || error ? (<span> {error || '...Loading'}</span>):
          tasks.map(
            (task)=><Task key={task.id} id={task.id} title={task.title}
             body={task.body} onDragStart={onDragStart}
              />
          )
      

        }
      
    </div>
  )
}

export default Lane
