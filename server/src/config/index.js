const dotenv = require('dotenv');
// const path =require("path")
// const envPath = path.join(__dirname, '../../.env');

require("dotenv/config")


module.exports = {
    port:process.env.PORT,
    jwtSecret:process.env.JWT_SECRET,

}
