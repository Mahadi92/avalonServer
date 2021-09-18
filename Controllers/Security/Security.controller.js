const SecurityModel = require('')

const getInfo = async (req, res) => {
    res.send("Security => Get")
}
const postInfo = async (req, res) => {
    res.send("Security => Post")
}
const updateInfo = async (req, res) => {
    res.send("Security => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Security => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
