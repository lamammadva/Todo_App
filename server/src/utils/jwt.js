const jwt = require("jsonwebtoken")
const config = require("../config")

const encodePayload = (user) => {
    return jwt.sign(user,config.jwtSecret)
}
const decodePayload = (token) => {
    const payload=  jwt.verify(token,config.jwtSecret)
    return payload


}
module.exports = {
    encodePayload,
    decodePayload
}