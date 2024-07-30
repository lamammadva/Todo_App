const express = require('express');
const router = express.Router();
const {todoController} = require("../controllers")

router.get('/', todoController.getTodo)
router.get('/:id', todoController.findTodo)
router.post('/', todoController.createTodo)
router.put('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)


module.exports = router;