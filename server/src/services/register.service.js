const {User} = require("../models")



const register = async({username,password})=>{
    const users = await User.findOne({where:{username}})
    if(users){
        throw new Error("username already exists")
    }
    const user = await User.create({username,password})
    return user

}
const getUserAll = async()=>{
    const data = await User.findAll()
    return data
}



module.exports = {
    register,
    getUserAll,
}