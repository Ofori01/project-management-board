import React,{useState, useEffect} from 'react'
import Lane from '../components/Lane'

const Board = () => {
  const lanes = [
    {id:1, title: 'To do'},
    {id:2, title:'In progress'},
    {id:3, title: 'Review'},
    {id:4, title:'Done'}
  ];
const [loading, setLoading]= useState();
const [error, setError] = useState();
const [tasks,setTasks] = useState([]);

useEffect(
  ()=>{
    setLoading(true);
    fetch('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')
    .then((data)=>data.json())
    .then(setTasks)
    .catch((e)=>setError(e.message))
    .finally(()=>setLoading(false))

  },[]
)

  return (
    <div className='flex m-4 flex-row gap-1 justify-between '>
      {lanes.map(
        ({title,id})=> <Lane key={id} title={title} loading={loading} error={error} tasks={tasks.filter((task)=> task.lane===id)} />
      )}
      
    </div>
  )
}

export default Board
