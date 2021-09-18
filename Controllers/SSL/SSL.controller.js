const SSLModel = require('')

const getInfo = async (req, res) => {
    res.send("SSL => Get")
}
const postInfo = async (req, res) => {
    res.send("SSL => Post")
}
const updateInfo = async (req, res) => {
    res.send("SSL => Update")
}
const deleteInfo = async (req, res) => {
    res.send("SSL => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
