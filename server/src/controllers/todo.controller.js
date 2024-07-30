const {todoServices} = require("../services/")

const getTodo = async(req,res,next) => {
    const {user}= req
   try {
         const data = await todoServices.getTodo(user.id)
        res.status(200).json(data)
   } catch (error) {
    next(error)
   }

}
const findTodo = async (req, res, next) => {
    const {user} = req
    try {
        const data = await todoServices.findTodo(req.params.id,user.id)
        res.status(200).json(data)
    } catch (error) {
        next(error)

        
    }
}
const createTodo = async (req, res,next) => {
    const {user} =req
    try {
        const params = {...req.body,userId:user.id}
        const data = await todoServices.createTodo(params)
        res.status(201).json(data)
    } catch (error) {
        next(error)
        
    }
}
const updateTodo = async (req, res,next) => {
    try {
        const {user} = req
        const params = {...req.body,id:req.params.id,userId:user.id}
        const data = await todoServices.updateTodo(params)
        console.log(data);
        
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }


}
const deleteTodo = async (req, res,next) => {
    const {user} = req
    const {id} = req.params
    try {
        await todoServices.deleteTodo({id,userId:user.id})
        res.status(200).json({message:"Todo deleted"})
    } catch (error) {
        next(error)
        
    }

}
module.exports = {
    getTodo ,
    createTodo,
    updateTodo,
    deleteTodo,
    findTodo
};