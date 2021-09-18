const express = require('express')
const HostFAQRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/HostFAQ/HostFAQ.controller')

HostFAQRoute.get('/', getInfo)
HostFAQRoute.post('/add', postInfo)
HostFAQRoute.patch('/update', updateInfo)
HostFAQRoute.delete('/delete', deleteInfo)

module.exports = HostFAQRoute