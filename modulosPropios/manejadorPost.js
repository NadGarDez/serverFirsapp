var querystring=require('querystring');
var formi= require('formidable');
var objeto="";


function init(peticion,needed,callback){
	
	
	var subidos = new formi.IncomingForm();
	
	subidos.parse(peticion,	
		function(error, campos, archivos){
			//operaciones con con los arhivos
			console.log(campos);
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


function init2(peticion,needed){
	
	return new Promise(
		(resolve,reject)=>{
			var subidos = new formi.IncomingForm();
			
			subidos.parse(peticion,	
				function(error, campos, archivos){
					//operaciones con con los arhivos

					if(error){

						reject(error);
					}
					else{

						switch(needed){

							case 1:

								obj={
									'campos':campos,
									'archivos':null
								}

								resolve(obj);

							break;


							case 2:

								obj={
									'campos':null,
									'archivos':archivos
								}

								resolve(obj);
								
							break;


							case 3:

								obj={
									'campos':campos,
									'archivos':archivos
								}

								resolve(obj);
								
							break;



						}


					}

					 
				}
			
			);
		}
	);
	
	
	
	
}

exports.init= init;
exports.init2=init2;

