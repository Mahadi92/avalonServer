const express = require('express')
const ProtectionRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Protection/Protection.controller')

ProtectionRoute.get('/', getInfo)
ProtectionRoute.post('/add', postInfo)
ProtectionRoute.patch('/update', updateInfo)
ProtectionRoute.delete('/delete', deleteInfo)

module.exports = ProtectionRoute