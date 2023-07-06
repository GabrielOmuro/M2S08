const { Router } = require('express')
const { getContracts, getContractById, deactivateContract, postContract} = require('../controller/contracts.controller')

class ContractsRoutes{
    routesFromContracts (){
        const routersContracts = Router();
        routersContracts.get('/contracts', getContracts)
        routersContracts.get('/contracts/:id', getContractById)
        routersContracts.post('/contracts', postContract)
        routersContracts.put('/contracts/:id', deactivateContract)
        return routersContracts
    }
}

module.exports = new ContractsRoutes