var querystring=require('querystring');
var formi= require('formidable');
var objeto="";


function init(peticion,needed){

	var subidos = new formi.IncomingForm();


	return new Promise(
		function(resolve,reject){

			subidos.parse(peticion,	
				function(error, campos, archivos){
					//operaciones con con los arhivos


					if(error){

						reject(error);


					}

					else{

						switch(needed){

							case 1:
								

									resolve(campos,null);


								

								

							break;


							case 2:

								
									resolve(null,archivos);

								
								
								
							break;


							case 3:

								

									resolve(campos,archivos);

								
								
								
							break;



						}

					}
			
			 
				}
	
			);

		}



	);


}



exports.init= init;