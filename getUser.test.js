modulo = require('./modulosPropios/getUser.js');
var mysql = require('./modulosPropios/mysqlMnager.js');
superFetch= require('./modulosPropios/fetchManager.js');
var url= require('url');

test('probar consulta mysql', () => {
	var consulta = "SELECT * FROM usuario WHERE id=4";
	return mysql.consultar2(consulta).then(
		data=>{
			expect(data).not.toBeUndefined();
			console.log(data);
		}
	)
	
	
});////////////


test('probar get user',

	()=>{

		var a = require('http');
		var server=a.createServer(

			function(req,res){/////
				var busqueda= url.parse(req.url,true);
				query=busqueda.query;
				busqueda = "."+busqueda.pathname;

				console.log(busqueda);
				
				var modulo;

				switch(busqueda){

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


				}
			}
		);

		server.listen(3000,'167.71.173.198',function(){console.log('inicio del servidor')});

		var data ='id=4';
    
	    superFetch.ini("http:\//167.71.173.198:3000/getUser",true,null,data,'post','json',
	      (data)=>{
	       ///root@167.71.173.198:3000/proyects/serverFirsapp
	              
	        console.log(data);

	        expect(data).not.toBeUndefined();
	        
	        
	      }
	      ,
	      (error)=>{
	        console.log(error)
	        
	      }
	    );



	}

);