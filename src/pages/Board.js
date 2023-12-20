import React,{useState, useEffect} from 'react'
import Lane from '../components/Lane'
import useDataFetching from '../hooks/useDataFetching';

const Board = () => {
  const lanes = [
    {id:1, title: 'To do'},
    {id:2, title:'In progress'},
    {id:3, title: 'Review'},
    {id:4, title:'Done'}
  ];
  const [loading,error,data]= useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks');

function onDragStart(e,id){
  e.dataTransfer.setData('id',id);
};
function onDragOver(e){
  e.preventDefault();
}
const [tasks,setTasks]= useState([]);
useEffect(
  ()=>{
    setTasks(data)
  },[data]
);

function onDrop(e,laneId){
  const id = e.dataTransfer.getData('id');
  const updatedTasks = tasks.map(
    (task)=>{
      if(task.id.toString()=== id){
        task.lane = laneId
      }
      return task
    }
  )
  setTasks(updatedTasks);
}



  return (
    <div className='flex m-4 flex-row gap-1 justify-between '>
      {lanes.map(
        ({title,id})=> <Lane key={id} laneId={id} title={title} loading={loading} error={error} tasks={tasks.filter((task)=> task.lane===id)} onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
         />
      )}
      
    </div>
  )
}

export default Board
