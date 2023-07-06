const express = require('express')
const routers = express.Router()
const { routesFromCategory } = require('./category.routes');
const { routesFromCompanies } = require('./companies.routes');
const { routesFromContracts } = require('./contracts.routes');
const { routesFromTrainees } = require('./trainees.routes');


routers.use('/api',[routesFromCategory(), routesFromCompanies(), routesFromContracts(), routesFromTrainees()])

module.exports = routers