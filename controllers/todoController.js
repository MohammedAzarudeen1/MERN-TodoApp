const todo = require('../model/todoSchema')

const getTodo = async(req,res)=>{
    try{
        const allTodo = await todo.find({})
        res.json(
            {count:allTodo.length,
             data : allTodo
            }
        )
    }catch(err){
        console.log(err.message)
    }
}

const postTudo = async(req,res)=>{
    try{
        const task = req.body.task.trim()
        if(!task){
            res.status(404).send("todo is required")
        }else{
            const addTudo = await todo.create({task})
            res.status(200).json(addTudo)
        }
    }catch(err){
        console.log(err.message)
    }
}

const getOneTudo = async(req,res)=>{
    try{
     const {id} = req.params
     if(!id){
       return res.status(404).json({"message": "invalid id"})
     }
      const oneTudo = await todo.findById(id)
       return res.status(200).json(oneTudo)   
    }catch(err){
        console.log(err.message)
    }
}

const updateTudo = async(req,res)=>{
    try{
      if(!req.body.task.trim()){
        return res.status(404).send("please enter task")
       }     
      const {id} = req.params
      const result = await todo.findByIdAndUpdate(id,req.body)
      if(!result){
       return res.status(404).send("please enter task and correct id")
      }
       return res.status(200).send("task updated")    
     }catch(err){
        console.log(err.message)
    }
}

const deleteTudo = async(req,res)=>{
    try{
        const {id} = req.params
        if(!id){
            res.status(404).send("invalid id")
        }else{
            const result = await todo.findByIdAndDelete(id)
            res.status(200).send("task deleted")
        }
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {getTodo,postTudo,getOneTudo,updateTudo,deleteTudo}