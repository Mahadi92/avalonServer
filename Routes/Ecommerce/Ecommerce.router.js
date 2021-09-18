const express = require('express')
const EcommerceRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Ecommerce/Ecommerce.controller')

EcommerceRoute.get('/', getInfo)
EcommerceRoute.post('/add', postInfo)
EcommerceRoute.patch('/update', updateInfo)
EcommerceRoute.delete('/delete', deleteInfo)

module.exports = EcommerceRoute