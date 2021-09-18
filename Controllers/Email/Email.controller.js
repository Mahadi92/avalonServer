const EmailModel = require('')

const getInfo = async (req, res) => {
    res.send("Email => Get")
}
const postInfo = async (req, res) => {
    res.send("Email => Post")
}
const updateInfo = async (req, res) => {
    res.send("Email => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Email => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
