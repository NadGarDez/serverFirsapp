var post = require('./manejadorPost.js');
var mysql = require('./mysqlMnager.js');
var seguridad = require('mysql');


var devolver=1;

function callbackPost(post,file){

	var consulta = "SELECT count(correo) unico FROM usuario WHERE correo="+seguridad.escape(post['correo'])


	

	mysql.consultar(consulta,procesarDatos,Cerror);

}


function procesarDatos(resultados,fila){
 	console.log(resultados);
	console.log(resultados[0].unico+" este es el resultado ");

	if(resultados[0].unico==0){

		data ={'validado':true}
		devolver(JSON.stringify(data));

	}

	else{

		data = {'validado': false}
		devolver(JSON.stringify(data));

	}

}

function Cerror(error){

	console.log(error);
	devolver(error);

}



function init(req,res,print){

	console.log(devolver);

	devolver =null;

	devolver = print;

	post.init(req,1,callbackPost);


}


exports.init= init;
