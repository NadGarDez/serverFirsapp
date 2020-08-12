

var post = require('./manejadorPost.js');
var mysql = require('./mysqlMnager.js');
var seguridad = require('mysql');
var fs = require('fs');


async function  init (req){

	return new Promise(
		async (resolve,reject)=>{

			try {

				dataPost= await post.init2(req,3);

			}
			catch(error){

				reject(error);

			}


			console.log(dataPost);

			if(dataPost.campos.busqueda!=""){
				var mys = consulta(dataPost.campos.busqueda);

			}
			else{
				var mys = consulta("");
			}


			



			

			resolve(JSON.stringify(mys));


		}




	)

	




}




async function consulta(busuqueda){

	if(busqueda!=""){

			var consulta = `SELECT pila,espcialidades,fotoPerfil,id from usuario WHERE roll="psicologo"`;

	}

	else{

			var consulta = `SELECT pila,espcialidades,fotoPerfil,id from usuario WHERE roll="psicologo" && pila="${busqueda}"`;



	}

	var result;
			
	try {

		mysqlResult= await mysql.consultar2(consulta);
		result =mysqlResult;
	}

	catch(error){

		result = error;
	}


	console.log(result);

	return result;

}

exports.init= init;