const Todo = require("./Todo.model")
const User = require("./user.model")


User.hasMany(Todo,{foreignKey: 'userId'}),
Todo.belongsTo(User,{foreignKey: 'userId'})

module.exports = {
    User,
    Todo
}