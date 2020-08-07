var post = require('./manejadorPost.js');
var mysql = require('./mysqlMnager.js');
var seguridad = require('mysql');


var devolver=1;

function callbackPost(post,file){

	var consulta = "SELECT id,roll FROM usuario WHERE CORREO='"+post['correo']+"' AND contracena = '"+post['contracena']+"'";


	

	mysql.consultar(consulta,procesarDatos,Cerror);

}


function procesarDatos(resultados,fila){

	if(resultados.length==0){
		data={
			'validado':false,
		}

	}

	else{
		data={
			'validado':false,
			'resultados':resultados[0]

		}

	}

	console.log(data);
	devolver(JSON.stringify(data));
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



async function init(req,res,print){

	console.log(devolver);

	devolver =null;

	devolver = print;

	try {

		dataPost= await post.init2(req,1);

	}
	catch(error){

		console.log(error);

	}

	console.log(dataPost);

	var consulta = "SELECT id,roll FROM usuario WHERE CORREO='"+dataPost.campos['correo']+"' AND contracena = '"+dataPost['contracena']+"'";

	try {

		mysqlResult= await mysql.consultar2(consulta);
		console.log(mysqlResult);
	}

	catch(error){

		console.log(error);
	}

	if(mysqlResult.resultados.length==0){
		data={
			'validado':false,
		}

	}

	else{
		data={
			'validado':false,
			'resultados':mysqlResult.resultados[0]

		}

	}

	console.log(data);
	devolver(JSON.stringify(data));
	


}


exports.init= init;
