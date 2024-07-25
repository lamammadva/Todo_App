const {registerServices} = require("../services")


const register = async(req,res)=>{
    try {
        const data =  await registerServices.register(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}
const getUserAll = async(req,res)=>{
    try {
        const data = await registerServices.getUserAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({error: error.message})

    }
}



module.exports = {
    register,
    getUserAll
    
}