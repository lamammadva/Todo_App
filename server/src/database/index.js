const path = require('path');
const {Sequelize} = require('sequelize');
const dbPath = path.join(__dirname,"../../dbsqlite")
const sequelize = new Sequelize({storage:dbPath,dialect:'sqlite',logging:console.log})


sequelize.sync().then(()=>{
    console.log("Database synchronized!")
}).catch((error)=>{
    console.log("Database synchronization error:",error);
})

module.exports = sequelize;