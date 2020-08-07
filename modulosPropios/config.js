

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

			/*

			var aleatoirio= new Date().getTime();//codigo para numero aleatorio
			var nombreArchivo = dataPost.archivos.avatar.name;
			var oldPath= dataPost.archivos.avatar.path;
			var dirImage = "./uploads/"aleatorio+dataPost.archivos.avatar.name;

			fs.renameSync(dataPost.archivos.avatar.path, dirImage);
*/
			console.log(dataPost);

			mover(dataPost.archivos.nuevaFoto.name,dataPost.archivos.nuevaFoto.path);

			console.log(dataPost);

			var mys = consulta(dataPost.campos.nombrePila,dataPost.campos.nombrePila,dirImage,dataPost.campos.id);



			

			resolve(mys);


		}




	)

	




}


function mover(name,path){

	var aleatoirio= new Date().getTime();//codigo para numero aleatorio
	var dirImage = "./uploads/"aleatorio+name;

	fs.renameSync(path, dirImage);




}

async function consulta(nombrePila,contracena,fotoPerfil,id){

	var consulta = `UPDATE usuario SET pila='${nombrePila}',contracena='${contracena}',fotoPerfil='${fotoPerfil}' WHERE id = ${id}`;
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