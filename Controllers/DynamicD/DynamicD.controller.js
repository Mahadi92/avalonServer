const DynamicDModel = require('')

const getInfo = async (req, res) => {
    res.send("DynamicD => Get")
}
const postInfo = async (req, res) => {
    res.send("DynamicD => Post")
}
const updateInfo = async (req, res) => {
    res.send("DynamicD => Update")
}
const deleteInfo = async (req, res) => {
    res.send("DynamicD => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
