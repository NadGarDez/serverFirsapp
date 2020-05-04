var post = require('./manejadorPost.js');
var mysql = require('./mysqlManager.js');
var seguridad = require('mysql');


var devolver=1;

function callbackPost(post,file){

	var consulta = "SELECT count(correo) FROM usuarios WHERE CORREO="+seguridad.scape(post['correo'])


	

	mysql.init(consulta,procesarDatos,Cerror);

}


function procesarDatos(resultados,fila){

	if(resultados.length<1){

		data ={'validado':true}
		devolver(data);

	}

	else{

		data = {'validado': false}
		devolver(data);

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