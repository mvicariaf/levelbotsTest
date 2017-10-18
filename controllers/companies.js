'use strict'

const Company = require('../models/company')

function getCompany (req, res) {
	let companyId = req.params.companyId

	Company.findById(companyId, (err, company) =>{
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!company) return res.status(404).send({message: `La compañía no existe`})

		res.status(200).send({ company })
	})
}

function getCompanies (req, res) {
	Company.find({}, (err, companies) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!companies) return res.status(404).send({message: `No existen compañías`})
	
		res.status(200).send({ companies })
	})
}

function saveCompany (req, res) {
	console.log('POST  /api/company')
	console.log(req.body)

	let company = new Company()

	company.products     	 = req.body.products
	company.relationships    = req.body.relationships

	company.save((err, companyStored) => {
		if (err) res.status(500).send({message: `Error al salvar en la base de datos ${err}`})

		res.status(200).send({company: companyStored}) 
		
	})
	
}

function updateCompany(req, res) {
	let companyId = req.params.companyId
	let update = req.body

	Company.findByIdAndUpdate(companyId, update, (err, companyUpdated) =>{
		if (err) return res.status(500).send({message: `Error al actualizar el perfil: ${err}`})

		res.status(200).send({ company: companyUpdated })
	})
}

function deleteCompany (req, res) {
	let companyId = req.params.companyId

	Company.findById(companyId, (err, company) =>{
		if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})

		company.remove(err =>{
			if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})
				res.status(200).send({message: 'El perfil ha sido eliminado'})
		})
	})
}


	
module.exports = {
	
	getCompany,
	getCompanies,
	saveCompany,
	updateCompany,
	deleteCompany
}