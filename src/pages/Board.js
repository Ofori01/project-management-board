import React from 'react'
import Lane from '../components/Lane'

const Board = () => {
  const lanes = [
    {id:1, title: 'To do'},
    {id:2, title:'In progress'},
    {id:3, title: 'Review'},
    {id:4, title:'Done'}
  ]
  return (
    <div className='flex m-[5%] flex-row justify-between '>
      {lanes.map(
        ({title,id})=> <Lane key={id} title={title} />
      )}
      
    </div>
  )
}

export default Board
