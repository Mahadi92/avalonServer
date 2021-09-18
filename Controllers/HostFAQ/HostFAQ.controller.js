const HostFAQModel = require('')

const getInfo = async (req, res) => {
    res.send("HostFAQ => Get")
}
const postInfo = async (req, res) => {
    res.send("HostFAQ => Post")
}
const updateInfo = async (req, res) => {
    res.send("HostFAQ => Update")
}
const deleteInfo = async (req, res) => {
    res.send("HostFAQ => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
