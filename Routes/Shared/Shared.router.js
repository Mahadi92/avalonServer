const express = require('express')
const SharedRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Shared/Shared.controller')

SharedRoute.get('/', getInfo)
SharedRoute.post('/add', postInfo)
SharedRoute.patch('/update', updateInfo)
SharedRoute.delete('/delete', deleteInfo)

module.exports = SharedRoute