var querystring=require('querystring');
var formi= require('formidable');
var objeto="";


function init(peticion,needed,callback){
	
	
	var subidos = new formi.IncomingForm();
	
	subidos.parse(peticion,	
		function(error, campos, archivos){
			//operaciones con con los arhivos

			switch(needed){

				case 1:

					callback(campos,null);

				break;


				case 2:

					callback(null,archivos);
					
				break;


				case 3:

					callback(campos,archivos);
					
				break;



			}
			
			 
		}
	
	);
	
	
	
	
}

exports.init= init;