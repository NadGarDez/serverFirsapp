var a = require('http');
open = require('opentok');
var url= require('url');

je = require('./modulosPropios/videoChat.js');
seciones= new Array();

je.init2()
.then(
	function(data){

		console.log(data);
		seciones.push(data);
	}
)


var server=a.createServer(

	function(req,res){/////

		var busqueda= url.parse(req.url,true);
		query=busqueda.query;
		busqueda = "."+busqueda.pathname;

		console.log(busqueda);
		
		var modulo;

		switch(busqueda){


			case './registrar':

				modulo = require('./modulosPropios/register.js');

				modulo.init(req,res,
					function(data){
						res.writeHead(200,{'content-type':'text/html'});
						res.write(data);
						return res.end();
					}

				);


			break;

			case './login':

				modulo = require('./modulosPropios/login.js');

				modulo.init(req,res,
					function(data){
						res.writeHead(200,{'content-type':'text/html'});
						res.write(data);
						return res.end();
					}

				);

			break;

			case './config':

				modulo = require('./modulosPropios/config.js');

			break;

			case './prueba':

				

				res.writeHead(200,{'content-type':'text/html'});
				res.write('hola mundo');
				return res.end();

			break;

			case './isUnique':


				modulo = require('./modulosPropios/isUnique.js');
				
				modulo.init(req,res,
					function(data){
						res.writeHead(200,{'content-type':'text/html'});
						res.write(data);
						return res.end();
					}

				);

			break;

			case './file':
                console.log(query);
                url = "./uploads/"+query.archivo;
				modulo = require('./modulosPropios/fileManager.js');

				modulo.init(url,

					function(data,mime){

						es.writeHead(200,{'content-type':mime});
						res.write(data);
						return res.end();

					}

				);

			break;


			case './upload':

				modulo= require('./modulosPropios/manejadorPost2.js');

				modulo.init(req,3)
				.then(

					function(a,b){


						console.log(a);

						console.log(b);

					}

				)
				.catch(
					function(error){
						console.log(error)
					}
				)
			break;


			case './getUser':

				modulo = require('./modulosPropios/getUser.js');

				modulo.init2(req,res,

					function(data){

						res.writeHead(200,{'content-type':'text/html'});
						res.write(data);
						return res.end();

					}

				);



			break;

			case './mongoose':

				modulo = require('./modulosPropios/mongoExperimento.js');
				console.log(modulo);

				modulo.init('nativo',


					function(data){

						res.writeHead(200,{'content-type':'text/html'});
						res.write(data);
						return res.end();

					}




				);


			break;

			case './mongo':


			break;

			case './videoChat':
				console.log(seciones);
				console.log(query.user);

				var tokenOptions = {};
			    tokenOptions.role = "publisher";
			    tokenOptions.data = "username"+query.user;

			    // Generate a token.
			    credenciales={
			    	'apiKey':seciones[0].apiKey,
					'session':seciones[0].session


			    }
			   // credenciales.open="";
			    
			    token = seciones[0].open.generateToken(seciones[0].session, tokenOptions);
			    credenciales.token=token;
			    console.log(token);

				/*
				modulo = require('./modulosPropios/videoChat.js');
				console.log(modulo);

				modulo.init(


					function(data){

						res.writeHead(200,{'content-type':'text/html'});
						res.write(data);
						return res.end();

					}




				);
				*/
				res.writeHead(200,{'content-type':'text/html'});
				res.write(JSON.stringify(credenciales));
				return res.end();




			break;


		}

	}


);


server.listen(3000,'167.71.173.198',function(){console.log('inicio del servidor')});
