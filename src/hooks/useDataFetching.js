import React,{useState, useEffect} from 'react'

const useDataFetching = (url) => {
    const [loading, setLoading]= useState();
    const [error, setError] = useState();
    const [tasks,setTasks] = useState([]);
    
    useEffect(
      ()=>{
        setLoading(true);
        fetch(url)
        .then((data)=>data.json())
        .then(setTasks)
        .catch((e)=>setError(e.message))
        .finally(()=>setLoading(false))
    
      },[url]
    )
  return [loading,error,tasks]
}

export default useDataFetching
