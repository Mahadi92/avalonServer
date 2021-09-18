const express = require('express')
const WordpressRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Wordpress/Wordpress.controller')

WordpressRoute.get('/', getInfo)
WordpressRoute.post('/add', postInfo)
WordpressRoute.patch('/update', updateInfo)
WordpressRoute.delete('/delete', deleteInfo)

module.exports = WordpressRoute