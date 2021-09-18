const SharedModel = require('')

const getInfo = async (req, res) => {
    res.send("Shared => Get")
}
const postInfo = async (req, res) => {
    res.send("Shared => Post")
}
const updateInfo = async (req, res) => {
    res.send("Shared => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Shared => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
