const WordpressModel = require('')

const getInfo = async (req, res) => {
    res.send("Wordpress => Get")
}
const postInfo = async (req, res) => {
    res.send("Wordpress => Post")
}
const updateInfo = async (req, res) => {
    res.send("Wordpress => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Wordpress => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
