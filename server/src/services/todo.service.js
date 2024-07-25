const {Todo} = require("../models")  


const findTodo = async (id,userId)=>{
    const data = await Todo.findOne({where:{id,userId}})
    console.log(data);
    return data

}

const getTodo = async (userId)=>{
    const data = await Todo.findAll({where:{userId}})
    console.log(data);
    if(data.length == 0) {throw new Error("Not found Todo up")}
    return data

}
const getTodoById = async(id) => {
    const data = await Todo.findByPk(id)
    if (!data){ throw new Error(`not found todo with ${id}`)}
    return data
}
const createTodo = async(params) => {
    const {description, userId} = params
    const data = await Todo.create({description, userId})
    return data
}
const updateTodo = async(params) => {
    const {description,id,userId} = params || {}
    let datas = await findTodo(id,userId)
    if(!datas){
        throw new Error("you cannot change")
    }
    const updatedTodo = await Todo.update({description},{where:{id:datas.id}});
    
    return await Todo.findByPk(datas.id);

}
const deleteTodo = async({id,userId}) => {
    let datas = await findTodo(id,userId)
    if(!datas){
        throw new Error("you can not delete")
    }
    await Todo.destroy({where:{id:datas.id}})
    return true

}
module.exports = {
    getTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,findTodo
}

