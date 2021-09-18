const express = require('express')
const PlanAndPricingRoute = express.Router()

const {
    getInfo, postInfo, updateInfo, deleteInfo
} = require('../../Controllers/PlanAndPricing/PlanAndPricing.controller')

PlanAndPricingRoute.get('/', getInfo)
PlanAndPricingRoute.post('/add', postInfo)
PlanAndPricingRoute.patch('/update', updateInfo)
PlanAndPricingRoute.delete('/delete', deleteInfo)

module.exports = PlanAndPricingRoute