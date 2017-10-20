'use strict'

const Company = require('../models/company')

function getCompany (req, res) {
	let companyId = req.params.companyId

	Company.findById(companyId, (err, company) =>{
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
			console.log(companyId)
		if (!company) return res.status(404).send({message: `La compañía no existe`})
		console.log( company )	
		res.status(200).send({ company })
	})
}

function getCompanies (req, res) {
	Company.find({}, { _id: 1, name: 1, homepage_url: 1 }, (err, companies) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!companies) return res.status(404).send({message: `No existen compañías`})
	
		res.status(200).send({ companies })
	})
}

function getProducts (req, res) {
	let companyId = req.params.companyId

	Company.findById(companyId, { products: 1 }, (err, company) =>{
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
			console.log(companyId)
		if (!company) return res.status(404).send({message: `La compañía no existe`})
		console.log( company )	
		res.status(200).send({ company })
	})
}
function getMembers (req, res) {
	let companyId = req.params.companyId

	Company.findById(companyId, { relationships: 1 }, (err, company) =>{
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
			console.log(companyId)
		if (!company) return res.status(404).send({message: `La compañía no existe`})
		console.log( company )	
		res.status(200).send({ company })
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
function saveProduct (req, res) {
	console.log('POST  /api/company/id/product')
	console.log(req.body)

	let companyId = req.params.companyId
	let productName = req.body.name
	let productPermalink = req.body.permalink

	Company.findByIdAndUpdate(companyId,  {$push: {"products": {name: productName, permalink: productPermalink}}}, {safe: true, upsert: true, new : true}, (err, companyUpdated) =>{
		if (err) return res.status(500).send({message: `Error al guardar producto: ${err}`})

		res.status(200).send({ company: companyUpdated })
	})
	
}



function updateCompany(req, res) {
	let companyId = req.params.companyId
	let update = req.body

	Company.findByIdAndUpdate(companyId, update, (err, companyUpdated) =>{
		if (err) return res.status(500).send({message: `Error al actualizar la empresa: ${err}`})

		res.status(200).send({ company: companyUpdated })
	})
}

function deleteCompany (req, res) {
	let companyId = req.params.companyId

	Company.findById(companyId, (err, company) =>{
		if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})

		company.remove(err =>{
			if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})
				res.status(200).send({message: 'La empresa ha sido eliminada'})
		})
	})
}


	
module.exports = {
	
	getCompany,
	getCompanies,
	getProducts,
	getMembers,
	saveCompany,
	saveProduct,
	updateCompany,
	deleteCompany
}