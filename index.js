var a = require('http');

var server=a.createServer(

	function(req,res){


		var busqueda = req.pathname;
		var modulo;

		switch(busqueda){


			case '/register':

				modulo = require('./modulosPropios/register.js');

				modulo.init(req,res,
					function(data){
						res.send(data);
					}

				);



			break;

			case '/login':

				modulo = require('./modulosPropios/login.js');

			break;

			case '/config':

				modulo = require('./modulosPropios/config.js');

			break;


		}

	}


);


server.listen(7070);