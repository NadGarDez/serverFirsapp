var post = require('./manejadorPost.js');
var mysql = require('./mysqlMnager.js');
var seguridad = require('mysql');


var devolver=1;

function callbackPost(post,file){
	console.log(post);
	var consulta = "INSERT INTO usuario (correo,contracena) VALUES ('"+post['correo']+"','"+post['contracena']+"')";

	mysql.consultar(consulta,procesarDatos,Cerror);

}


function procesarDatos(resultados,fila){
	if(resultados.affectedRows==1){
		devolver(JSON.stringify({'registrado':true}));
	}
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


exports.init= init;