const {loginServices} = require("../services")

const login = async(req,res)=>{
    try {
        const data = await loginServices.login(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({message: error?.message})
        
    }
}

module.exports = {
    login
}