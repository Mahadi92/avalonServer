const express = require('express')
const CommonRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Common/Common.controller')

CommonRoute.get('/', getInfo)
CommonRoute.post('/add', postInfo)
CommonRoute.patch('/update', updateInfo)
CommonRoute.delete('/delete', deleteInfo)

module.exports = CommonRoute