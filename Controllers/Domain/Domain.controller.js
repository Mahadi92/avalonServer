const DomainModel = require('')

const getInfo = async (req, res) => {
    res.send("Domain => Get")
}
const postInfo = async (req, res) => {
    res.send("Domain => Post")
}
const updateInfo = async (req, res) => {
    res.send("Domain => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Domain => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
