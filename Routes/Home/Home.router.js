const express = require('express')
const HomeRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Home/Home.controller')

HomeRoute.get('/', getInfo)
HomeRoute.post('/add', postInfo)
HomeRoute.patch('/update', updateInfo)
HomeRoute.delete('/delete', deleteInfo)

module.exports = HomeRoute