const {registerServices} = require("../services")


const register = async(req,res,next)=>{
    try {
        const data =  await registerServices.register(req.body)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}
const getUserAll = async(req,res,next)=>{
    try {
        const data = await registerServices.getUserAll()
        res.status(200).json(data)
    } catch (error) {
        next(error)

    }
}



module.exports = {
    register,
    getUserAll
    
}