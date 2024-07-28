const {User} = require('../models')
const { checkPassword } = require('../utils/bcrypt')
const { encodePayload } = require('../utils/jwt')

const login = async({username,password})=>{
    let user = await User.findOne({where: {username}})
    if(!user){
        throw new Error("User  not found")
    }
    const check = await checkPassword(password,user.password)
    if(!check){
        throw new Error("password incorrect")

    }
    const payload = {
        userId:user.id
    }
    user = user.toJSON()
    const token = encodePayload(payload)
    delete user.password


    return {
        user,
        token
    }

}

module.exports = {
    login
}