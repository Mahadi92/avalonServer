const CommonModel = require('')

const getInfo = async (req, res) => {
    res.send("Common => Get")
}
const postInfo = async (req, res) => {
    res.send("Common => Post")
}
const updateInfo = async (req, res) => {
    res.send("Common => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Common => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
