const { Router } = require('express')
const { getCategories, postCategories, deleteAllCategories, deleteCategoryById, deleteCategoryByName} = require('../controller/category.controller');

class CategoryRoutes{
    routesFromCategory (){
        const routersCategory = Router();
        routersCategory.get("/categories", getCategories)
        routersCategory.post("/categories", postCategories)
        routersCategory.delete("/categories/deleteall",deleteAllCategories)
        routersCategory.delete("/categories/deleteById/:id", deleteCategoryById)
        routersCategory.delete("/categories/deleteByName/:name", deleteCategoryByName)
        return routersCategory
    }
}

module.exports = new CategoryRoutes