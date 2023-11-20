import React, { useState,useEffect } from 'react'
import Header from './components/Header'
import Lists from './components/lists'
import api from '../src/api/todos'


const App = () => {
  const [tasks,setTasks] = useState([]) 
  const [input,setInput] = useState("")
  const [updateUI,setUpdateUI] = useState(false)
  const [updateId, setupdateId] = useState(null)
   useEffect(()=>{
     try{
        const fetchTasks = async()=>{
          const responce = await api.get('/todo')
          setTasks(responce.data.data)
         }
        fetchTasks()
      }
      catch(err){
        console.log(err.message)
        }
     }
   ,[])

   
const handleSubmit =async(e)=>{
  e.preventDefault()
    try{
      const addTask = {task:input}  
      const response = await api.post('/todo',addTask)
      const allTasks = [...tasks,response.data]
      setTasks(allTasks)
      setInput("")
    }catch(err){
      console.log(err)
      }
}
const updateTask = (id,task)=>{
  setInput(task)
  setupdateId(id)
}
const handleEdit =async(e)=>{
  try{
      const updatedTask = {task:input}
      const responce =await api.put(`/todo/${updateId}`,updatedTask)
      e.preventDefault()
      setUpdateUI(prevstate => !prevstate)
      setInput("")
      setupdateId(null)
    }
  catch(err){
      console.log(err)
    } 
}

const handleDelete = async(id)=>{
  await api.delete(`/todo/${id}`)
  const deleteTask = tasks.filter(task=>task._id!==id)
  setTasks(deleteTask)
}

  return (
    <div className='app'>
    <Header title={"To Do App"}/>
    <Lists 
      tasks={tasks}
      input={input}
      setInput={setInput}
      addTask={handleSubmit}
      handleDelete={handleDelete}
      updateTask={updateTask}
      updateId={updateId}
      handleEdit={handleEdit}
      />
   </div>
    )
}

export default App