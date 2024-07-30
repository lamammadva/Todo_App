const { AppError } = require("../errors")
const {User} = require("../models")
const { hashPassword } = require("../utils/bcrypt")



const register = async({username,password})=>{
    const users = await User.findOne({where:{username}})
    const hash = await hashPassword(password)
    if(users){
        throw new AppError("Username already exists",409)
    }
    const user = await User.create({username,password:hash})
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