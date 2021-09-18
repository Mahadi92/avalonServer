const express = require('express')
const DomainRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Domain/Domain.controller')

DomainRoute.get('/', getInfo)
DomainRoute.post('/add', postInfo)
DomainRoute.patch('/update', updateInfo)
DomainRoute.delete('/delete', deleteInfo)

module.exports = DomainRoute