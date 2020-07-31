
var fs = require('fs');



function init(url,callback){

	console.log(url);
	fs.readFile(url,

		function(error,data){


			if(error){
				console.log(error);
			}
			
			else{

				console.log(data);

				var corte = url.split('.');

				var extension = corte[corte.length-1];

				var mime = mime[extension];

				callback(data,mime);


			}


		}


	);



}

async function init2(url){

	mimex = {
	   'html' : 'text/html',
	   'css'  : 'text/css',
	   'jpg'  : 'image/jpg',
	   'ico'  : 'image/x-icon',
	   'mp3'  :	'audio/mpeg3',
	   'mp4'  : 'video/mp4',
	   'png' : 'image/png'
	};

	//console.log(this);
	return new Promise(
		(resolve,reject)=>{
			console.log(url);
			fs.readFile(url,

				function(error,data){


					if(error){
						reject(error);
					}
					
					else{

						console.log(this.mimex);

						var corte = url.split('.');

						var extension = corte[corte.length-1];

						var mime = mimex[extension];

						resolvedor= {'data':data,'mime':mime}

						resolve(resolvedor);


					}


				}


			);



		}


	);

	



}


exports.init = init;

exports.init2 = init2;