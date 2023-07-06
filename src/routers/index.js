const express = require('express')
const routers = express.Router()
const { getCategories, postCategories, deleteAllCategories, deleteCategoryById, deleteCategoryByName} = require('../controller/category_functions')
const { getTrainees, getTraineeById, updateTraineeById, postTrainee} = require('../controller/trainees_functions')
const { getCompanies, getCompanyById, updateCompany, postCompany} = require('../controller/companies_functions') 
const { getContracts, getContractById, deactivateContract, postContract} = require('../controller/contracts_functions')

routers.get("/categories", getCategories)
routers.post("/categories", postCategories)
routers.delete("/categories/deleteall",deleteAllCategories)
routers.delete("/categories/deleteById/:id", deleteCategoryById)
routers.delete("/categories/deleteByName/:name", deleteCategoryByName)

routers.get('/trainees', getTrainees)
routers.get('/trainees/:id', getTraineeById)
routers.post('/trainees', postTrainee)
routers.put('/trainees/:id', updateTraineeById)

routers.get('/companies', getCompanies)
routers.get('/companies/:id', getCompanyById)
routers.post('/companies', postCompany )
routers.put('/compnies/:id', updateCompany)

routers.get('/contracts', getContracts)
routers.get('/contracts/:id', getContractById)
routers.post('/contracts', postContract)
routers.put('/contracts/:id', deactivateContract)

module.exports = routers