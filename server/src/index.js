const express = require('express');
const app = express();
const config = require("./config")
const cors = require('cors')
const router = require("./routes/");
const { ErrorMiddleware } = require('./middleware/error.middleware');
app.use(express.json())


app.use(cors())
app.use(router)

app.use(ErrorMiddleware)


app.listen(config.port,()=>{
    console.log(`Server is running on port ${config.port} `);
})




