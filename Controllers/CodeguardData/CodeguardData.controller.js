const CodeguardDataModel = require('')

const getInfo = async (req, res) => {
    res.send("CodeguardData => Get")
}
const postInfo = async (req, res) => {
    res.send("CodeguardData => Post")
}
const updateInfo = async (req, res) => {
    res.send("CodeguardData => Update")
}
const deleteInfo = async (req, res) => {
    res.send("CodeguardData => Delete")
}

module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
