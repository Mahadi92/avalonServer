const express = require('express')
const EmailRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Email/Email.controller')

EmailRoute.get('/', getInfo)
EmailRoute.post('/add', postInfo)
EmailRoute.patch('/update', updateInfo)
EmailRoute.delete('/delete', deleteInfo)

module.exports = EmailRoute