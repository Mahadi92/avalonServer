const EcommerceModel = require('')

const getInfo = async (req, res) => {
    res.send("Ecommerce => Get")
}
const postInfo = async (req, res) => {
    res.send("Ecommerce => Post")
}
const updateInfo = async (req, res) => {
    res.send("Ecommerce => Update")
}
const deleteInfo = async (req, res) => {
    res.send("Ecommerce => Delete")
}

module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
