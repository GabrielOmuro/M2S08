const { Router } = require('express')
const { getTrainees, getTraineeById, updateTraineeById, postTrainee} = require('../controller/trainees.controller')

class TraineesRoutes{
    routesFromTrainees (){
        const routersTrainees = Router();
        routersTrainees.get('/trainees', getTrainees)
        routersTrainees.get('/trainees/:id', getTraineeById)
        routersTrainees.post('/trainees', postTrainee)
        routersTrainees.put('/trainees/:id', updateTraineeById)
        return routersTrainees
    }
}

module.exports = new TraineesRoutes