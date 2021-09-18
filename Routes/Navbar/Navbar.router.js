const express = require('express')
const NavbarRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/Navbar/Navbar.controller')

NavbarRoute.get('/', getInfo)
NavbarRoute.post('/add', postInfo)
NavbarRoute.patch('/update', updateInfo)
NavbarRoute.delete('/delete', deleteInfo)

module.exports = NavbarRoute