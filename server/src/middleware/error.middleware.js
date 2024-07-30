const { AppError } = require("../errors")


const ErrorMiddleware=(error,req,res,next)=>{
    if(error instanceof AppError){
        res.status(error.statusCode).json({error:error.message})
    }
    res.status(500).json({error:"Internal Server Error"})

}

module.exports ={
    ErrorMiddleware
}