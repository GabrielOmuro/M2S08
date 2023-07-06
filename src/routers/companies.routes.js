const { Router } = require('express')
const { getCompanies, getCompanyById, updateCompany, postCompany} = require('../controller/companies.controller') 

class CompaniesRoutes{
    routesFromCompanies (){
        const routersCompanies = Router();
        routersCompanies.get('/companies', getCompanies)
        routersCompanies.get('/companies/:id', getCompanyById)
        routersCompanies.post('/companies', postCompany )
        routersCompanies.put('/compnies/:id', updateCompany)
        return routersCompanies
    }
}

module.exports = new CompaniesRoutes