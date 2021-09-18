const express = require('express')
const SitelockDataRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/SitelockData/SitelockData.controller')

SitelockDataRoute.get('/', getInfo)
SitelockDataRoute.post('/add', postInfo)
SitelockDataRoute.patch('/update', updateInfo)
SitelockDataRoute.delete('/delete', deleteInfo)

module.exports = SitelockDataRoute