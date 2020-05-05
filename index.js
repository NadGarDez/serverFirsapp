var a = require('http');

var url= require('url');

var server=a.createServer(

	function(req,res){

		var busqueda= url.parse(req.url);
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


		}

	}


);


server.listen('167.71.173.198',3000,function(){console.log('inicio del servidor')});
