var fs= require('fs');
var devolver = 1;

function callbackPost(post,archivos){
	respuesta={'upload': false};
	
	for(var key in archivos){
		
		var tempdir=archivos[key].path;
		var newdir= ruta+archivos[key].name;
		fs.rename(tempdir,newdir, function(error){
			if(error){
				respuesta=JSON.stringify(respuesta);
				devolver(respuesta);
			}
			else{
				respuesta.upload=true;
				respuesta= JSON.stringify(respuesta);
				devolver(respuesta);
			}
		});
	}
	
}

function init(req,res,print){


	devolver =null;

	devolver = print;

	post.init(req,2,callbackPost);

}



exports.init= init;