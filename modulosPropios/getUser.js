var post = require('./manejadorPost.js');
var mysql = require('./mysqlMnager.js');
var seguridad = require('mysql');


var devolver=1;

function callbackPost(post,file){
	console.log(post);
	var consulta = "SELECT * FROM usuario WHERE id="+post['id'];

	mysql.consultar(consulta,procesarDatos,Cerror);
	

}


function procesarDatos(resultados,fila){
	
	devolver(JSON.stringify(resultados[0]));
	
//	devolver(resultados);

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

async function init2(req,res,print){

	dataPost= await post.init2(req,1);

	console.log(dataPost);

	var consulta = "SELECT * FROM usuario WHERE id="+dataPost.campos['id'];

	mysqlResult= await mysql.consultar2(consulta);

	print(JSON.stringify(resultados[0]));

	console.log(mysqlResult);

}


exports.init= init;