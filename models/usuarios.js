'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var roles = ['Administrador','Profesor','Ayudante','Estudiante']
var tipo = ['cedula','matricula']
var email_match = [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,"Coloca un email valido"]

const UsuarioSchema = Schema({
	nombre: { 
		type: String, 
		maxlength: [30, "Maximo 30 caracteres"], 
		required: "El nombre es obligatorio"
	},
	apellido: { 
		type: String, 
		maxlength: [30, "Maximo 30 caracteres"], 
		required: "El apellido es obligatorio"
	},
	tipoIdent: { 
		type: String, 
		enum:  { values: tipo, message: "Identificacion no valida" } 
	},
	ident: { 
		type: String, 
		required: "Matricula o Cedula obligatoria", 
		maxlength: [10, "Maximo 10 caracteres"]
	},
	carrera: { 
		type: String  //, required: "La carrera es obligatoria"
	},
	correo: { 
		type: String, 
		required: "El correo es obligatorio",
		match: email_match
	},
	contrasena: { 
		type: String, 
		minlength: [8, "La contrasena debe tener minimo 8 caracteres"]
	},
	rol: { 
		type: String, 
		enum: { values: roles, message: "Rol no valido" } 
	},
	paralelo: {
		type: String, 
		maxlength: [2, "Maximo 2 caracteres"]
	}
})

var User = module.exports = mongoose.model('Usuario', UsuarioSchema)


module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUsuarioByCorreo = function(correo, callback){
	var query = {correo: correo};
	User.findOne(query, callback);
}