const express = require('express')
const CodeguardDataRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/CodeguardData/CodeguardData.controller')

CodeguardDataRoute.get('/', getInfo)
CodeguardDataRoute.post('/add', postInfo)
CodeguardDataRoute.patch('/update', updateInfo)
CodeguardDataRoute.delete('/delete', deleteInfo)

module.exports = CodeguardDataRoute