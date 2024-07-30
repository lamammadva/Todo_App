const {loginServices} = require("../services")

const login = async(req,res,next)=>{
    try {
        const data = await loginServices.login(req.body)
        res.status(200).json(data)
    } catch (error) {
        next(error)
        
    }
}

module.exports = {
    login
}