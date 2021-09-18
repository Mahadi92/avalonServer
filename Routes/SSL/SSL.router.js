const express = require('express')
const SSLRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/SSL/SSL.controller')

SSLRoute.get('/', getInfo)
SSLRoute.post('/add', postInfo)
SSLRoute.patch('/update', updateInfo)
SSLRoute.delete('/delete', deleteInfo)

module.exports = SSLRoute