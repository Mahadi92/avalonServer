const PlanAndPricingModel = require('')

const getInfo = async (req, res) => {
    res.send("PlanAndPricing => Get")
}
const postInfo = async (req, res) => {
    res.send("PlanAndPricing => Post")
}
const updateInfo = async (req, res) => {
    res.send("PlanAndPricing => Update")
}
const deleteInfo = async (req, res) => {
    res.send("PlanAndPricing => Delete")
}


module.exports = {
    getInfo, postInfo, updateInfo, deleteInfo
}
