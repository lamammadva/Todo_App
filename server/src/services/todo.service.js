const { NotFoundError } = require("../errors");
const {Todo} = require("../models")  


const findTodo = async (id,userId)=>{
    const data = await Todo.findOne({where:{id,userId}})
    if(!data) {throw new NotFoundError(`Not found Todo up with ${id}`)}
    return data

}

const getTodo = async (userId)=>{
    const data = await Todo.findAll({where:{userId}})
    console.log(data);
    if(data.length == 0) {throw new NotFoundError("Not found Todo up")}
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
    const updatedTodo = await datas.update({description},{where:{id:datas.id}});
    return updatedTodo

}
const deleteTodo = async({id,userId}) => {
    let datas = await findTodo(id,userId)
    await Todo.destroy({where:{id:datas.id}})
    return true

}
module.exports = {
    getTodo,
    findTodo,
    createTodo,
    updateTodo,
    deleteTodo,
}

