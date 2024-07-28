const bcrypt = require('bcrypt');

const hashPassword = async(password)=>{
    return hash = bcrypt.hash(password,10)


}
const checkPassword = async(password,hashed)=>{
    return check = bcrypt.compare(password,hashed)
}

module.exports={
    hashPassword,
    checkPassword
}