import React from 'react'

const Lane = ({title}) => {
  return (
    <div className='p-0 bg-gray-400 rounded-[20px] min-h-[50vh] w-[30vh]'>
        <h1 className='w-full pb-[10px] text-center border-b-black border-b'>
            {title}
        </h1>
      
    </div>
  )
}

export default Lane
