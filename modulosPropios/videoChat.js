open = require('opentok');

fs= require('fs');

var apiKey="46832574";
var apiSecret="9b49c719f90aa115a5c49d8ed2925020464b8a7e";





function init(callback){

	console.log('hola');

	var a = callback;

	opentok= new open(apiKey,apiSecret);

	console.log(opentok);

	opentok.createSession(

		(err, session)=>{
			console.log(session);

			if(err){
				a('error');
				
			}

			else{
				
				a(session.sessionId);

				
			}
		}


	);
	
}

function init2(){

	console.log('hola');

	return new Promise(
		(resolve,reject)=>{
			opentok= new open(apiKey,apiSecret);

			opentok.createSession(

				(err, session)=>{
					

					if(err){
						reject(err);
						
					}

					else{

						obj={

							'apiKey':apiKey,
							'session':session.sessionId
						}
						resolve(obj);
						
					}
				}


			)
		}
	);
	
	
}





exports.init= init;

exports.init2= init2;