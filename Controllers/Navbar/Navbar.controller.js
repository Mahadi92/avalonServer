const NavbarModel = require('')

const getInfo = async (req, res) => {
    res.send("Navbar => Get")
}
const postInfo = async (req, res) => {
    res.send("Navbar => Post")
}
const updateInfo = async (req, res) => {
    res.send("Navbar => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Navbar => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
