const SitelockDataModel = require('')

const getInfo = async (req, res) => {
    res.send("Sitelock => Get")
}
const postInfo = async (req, res) => {
    res.send("Sitelock => Post")
}
const updateInfo = async (req, res) => {
    res.send("Sitelock => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Sitelock => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
