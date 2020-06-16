
var fs = require('fs');

const mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :	'audio/mpeg3',
   'mp4'  : 'video/mp4'
};

function init(url,callback){

	fs.readFile(url,

		function(error,data){


			if(error){
				console.log('el archivo no existe')
			}
			
			else{

				var corte = url.split('.');

				var extension = corte[corte.length-1];

				var mime = mime[extension];

				callback(data,mime);


			}


		}


	);



}


exports.init = init;