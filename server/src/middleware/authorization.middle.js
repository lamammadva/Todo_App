const { User } = require("../models")
const { registerServices } = require("../services")
const { decodePayload } = require("../utils/jwt")

const authorization = async(req,res,next)=>{
        let token = req.headers.authorization
        if(!token?.includes("Bearer")){
            return res.status(404).json({message:"not found token"})
        }
        token = token.split(' ')[1]
        const result = decodePayload(token)
        if(!result?.userId){
            return res.status(404).json({message:"not found token userid"})

        }
        const user = await User.findOne({where:result.userId})
        if(!user){
            res.status(404).json({message:"not found user"})
        }
        req.user = user
        next()



}


module.exports = {
    authorization
}