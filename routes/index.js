'use strict'

const exppress = require('express')

const companyCtrl = require('../controllers/companies')
const api = exppress.Router()



api.get('/company', companyCtrl.getCompanies) 
api.get('/company/:companyId', companyCtrl.getCompany )
api.post('/company', companyCtrl.saveCompany)
api.put('/company/:profileId', companyCtrl.updateCompany)
api.delete('/companies/:companyId', companyCtrl.deleteCompany)


module.exports = api




