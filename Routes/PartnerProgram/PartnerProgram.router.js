const express = require('express')
const PartnerProgramRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/PartnerProgram/PartnerProgram.controller')

PartnerProgramRoute.get('/', getInfo)
PartnerProgramRoute.post('/add', postInfo)
PartnerProgramRoute.patch('/update', updateInfo)
PartnerProgramRoute.delete('/delete', deleteInfo)

module.exports = PartnerProgramRoute