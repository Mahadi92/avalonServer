const HomeModel = require('')

const getInfo = async (req, res) => {
    res.send("Home => Get")
}
const postInfo = async (req, res) => {
    res.send("Home => Post")
}
const updateInfo = async (req, res) => {
    res.send("Home => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Home => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
