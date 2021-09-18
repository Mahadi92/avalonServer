const PartnerProgramModel = require('')

const getInfo = async (req, res) => {
    res.send("PartnerProgram => Get")
}
const postInfo = async (req, res) => {
    res.send("PartnerProgram => Post")
}
const updateInfo = async (req, res) => {
    res.send("PartnerProgram => Update")
}
const deleteInfo = async (req, res) => {
    res.send("PartnerProgram => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
