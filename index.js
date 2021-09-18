const express = require('express')
const Router = require('./Routes/Router')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())
app.use("/admin", Router)


const uri = ''

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("db ready"))
    .catch((err) => console.log(err));

app.listen(5000)
