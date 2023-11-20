import React from 'react'
import {MdDeleteForever} from "react-icons/md"
import {FaEdit} from "react-icons/fa"


const Lists = ({tasks,input,setInput,addTask,handleDelete,updateTask,updateId,handleEdit})=>{
    return(
         <main className='todo'>
            <form type='onSubmit' className='form'>
                <input 
                 type="text" 
                 placeholder='Enter the task'
                 value={input}
                 onChange={(e)=>setInput(e.target.value)}
                required
                />
                <button type='onsubmit'  onClick={updateId ? handleEdit : addTask} className='add'>{ updateId ? "update":"Add"} </button>
            </form>
             <ul className='tasks'>
                {tasks.map(task=>
                    <li key={task._id} className='lists'>
                       <label>{task.task}</label>
                       <div className="icons">
                         <div className='icon delete' onClick={()=>{handleDelete(task._id)}}> <MdDeleteForever/>  </div>
                         <div className='icon edit' onClick={()=>{updateTask(task._id,task.task)}}>  <FaEdit />  </div>
                       </div>
                    </li>
                )}
             </ul>   
        </main>   
    )
}
export default Lists;