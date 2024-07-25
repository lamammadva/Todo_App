const {todoServices} = require("../services/")

const getTodo = async(req,res) => {
    const {user}= req
   try {
         const data = await todoServices.getTodo(user.id)
        res.status(200).json(data)
   } catch (error) {
        res.status(404).json({message:error?.message})
   }

}
const getTodoById = async (req, res) => {
    try {
        const data = await todoServices.getTodoById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({message:error?.message})
        
    }
}
const createTodo = async (req, res) => {
    const {user} =req
    try {
        const params = {...req.body,userId:user.id}
        const data = await todoServices.createTodo(params)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({message:"Invalid request"})
        
    }
}
const updateTodo = async (req, res) => {
    try {
        const {user} = req
        const params = {...req.body,id:req.params.id,userId:user.id}
        const data = await todoServices.updateTodo(params)
        console.log(data);
        
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message:error?.message})
    }


}
const deleteTodo = async (req, res) => {
    const {user} = req
    const {id} = req.params
    try {
        await todoServices.deleteTodo({id,userId:user.id})
        res.status(200).json({message:"Todo deleted"})
    } catch (error) {
        res.status(404).json({message:error?.message})
        
    }

}
module.exports = {
    getTodo ,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoById
};