var post = require('./manejadorPost.js');
var mysql = require('./mysqlMnager.js');
var seguridad = require('mysql');


var devolver=1;

function callbackPost(post,file){

	var consulta = "SELECT id,roll FROM usuario WHERE CORREO='"+post['correo']+"' AND contracena = '"+post['contracena']+"'";


	

	mysql.consultar(consulta,procesarDatos,Cerror);

}


function procesarDatos(resultados,fila){

	console.log(resultados[0]);
	devolver(JSON.stringify(resultados[0]));
	/*

	if(resultados[0].existe==0){

		data ={'validado':false}
		devolver(JSON.stringify(data));

	}

	else{

		data = {'validado': true}
		devolver(JSON.stringify(data));

	}
*/
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
