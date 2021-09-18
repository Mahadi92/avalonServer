const express = require('express')
const DynamicDRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/DynamicD/DynamicD.controller')

DynamicDRoute.get('/', getInfo)
DynamicDRoute.post('/add', postInfo)
DynamicDRoute.patch('/update', updateInfo)
DynamicDRoute.delete('/delete', deleteInfo)

module.exports = DynamicDRoute