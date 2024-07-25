const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Todo = sequelize.define('Todo', {
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
})

module.exports = Todo;