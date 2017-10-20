'use strict'

const exppress = require('express')

const companyCtrl = require('../controllers/companies')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')

const api = exppress.Router()



api.get('/companies', companyCtrl.getCompanies) 
api.get('/company/:companyId', companyCtrl.getCompany)
api.get('/company/:companyId/products', companyCtrl.getProducts)
api.get('/company/:companyId/members', companyCtrl.getMembers)
api.post('/company', companyCtrl.saveCompany)
api.post('/company/:companyId/producto', companyCtrl.saveProduct)
api.put('/company/:profileId', companyCtrl.updateCompany)
api.delete('/company/:companyId', companyCtrl.deleteCompany)
api.get('/private', auth, (req, res) => {
	res.status(200).send({ message: 'Tienes acceso'})
})

module.exports = api




