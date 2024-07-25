const express = require('express');
const router = express.Router();
const todoRouter = require("./todo.router")
const loginRouter = require("./login.router")
const registerRouter = require("./register.router");
const { authorization } = require('../middleware/authorization.middle');


router.use('/todo', authorization ,todoRouter)
router.use('/register',registerRouter)
router.use('/login',loginRouter)

module.exports = router