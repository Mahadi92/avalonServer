const ProtectionModel = require('')

const getInfo = async (req, res) => {
    res.send("Protection => Get")
}
const postInfo = async (req, res) => {
    res.send("Protection => Post")
}
const updateInfo = async (req, res) => {
    res.send("Protection => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Protection => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
