const express = require('express')
const SecurityRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Security/Security.controller')

SecurityRoute.get('/', getInfo)
SecurityRoute.post('/add', postInfo)
SecurityRoute.patch('/update', updateInfo)
SecurityRoute.delete('/delete', deleteInfo)

module.exports = SecurityRoute