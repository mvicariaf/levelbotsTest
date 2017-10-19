'use strict'

const exppress = require('express')

const companyCtrl = require('../controllers/companies')
const api = exppress.Router()



api.get('/companies', companyCtrl.getCompanies) 
api.get('/company/:companyId', companyCtrl.getCompany)
api.get('/company/:companyId/products', companyCtrl.getProducts)
api.get('/company/:companyId/members', companyCtrl.getMembers)
api.post('/company', companyCtrl.saveCompany)
api.post('/company/:companyId/producto', companyCtrl.saveProduct)
api.put('/company/:profileId', companyCtrl.updateCompany)
api.delete('/companies/:companyId', companyCtrl.deleteCompany)


module.exports = api




