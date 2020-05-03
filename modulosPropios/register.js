var post = require('./manejadorPost.js');
var mysql = require('./mysqlManager.js');
var seguridad = require('mysql');


var devolver=1;

function callbackPost(post,file){

	var consulta = "INSERT INTO usuarios (correo,contracena) VALUES ("+seguridad.scape(post['correo'])+","+seguridad.escape(post['contracena']+")");

	mysql.init(consulta,procesarDatos,Cerror);

}


function procesarDatos(resultados,fila){

	devolver(resultados);

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