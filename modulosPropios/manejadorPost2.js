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
									ob ={campos,archivos}
								
									resolve(ob);

								
								
								
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




function async init2(peticion,needed){

	var subidos = new formi.IncomingForm();


	return new Promise(
		async function(resolve,reject){

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
									ob ={campos,archivos}
								
									resolve(ob);

								
								
								
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


exports.init2= init2;
exports.init= init;