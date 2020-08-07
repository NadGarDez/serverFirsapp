var mysql = require('./modulosPropios/mysqlMnager.js');
superFetch= require('./modulosPropios/fetchManager.js');

servidor= require('./modulosPropios/server.js');

servidor.servir();


test('probar consulta mysql', () => {
	var consulta = "SELECT id,roll FROM usuario WHERE CORREO='iranad@hotmail.com' AND contracena = '123'";
	return mysql.consultar2(consulta).then(
		data=>{
			expect(data).not.toBeUndefined();
			console.log(data);
		}
	)
	
	
});


test(

	'probar modulo login afirmativo',


	()=>{

		

		data = "correo=iranad@hotmail.com&contracena=123";

		superFetch.ini("http:\//167.71.173.198:3000/login",true,null,data,'post','json',
	      (data)=>{
	       ///root@167.71.173.198:3000/proyects/serverFirsapp
	              
	        console.log(data);

	        expect(data).not.toBeUndefined();
	        expect(data.validado).toBeTruthy();
	        
	        
	      }
	      ,
	      (error)=>{
	        console.log(error)
	        
	      }
	    );


	}





);


test(

	'probar modulo login negativo',


	()=>{

	

		data = "correo=iranad@hotmail.com&contracena=12355555";

		superFetch.ini("http:\//167.71.173.198:3000/login",true,null,data,'post','json',
	      (data)=>{
	       ///root@167.71.173.198:3000/proyects/serverFirsapp
	              
	        console.log(data);

	        expect(data).not.toBeUndefined();
	        expect(data.validado).toBeFalsy();
	        
	        
	      }
	      ,
	      (error)=>{
	        console.log(error)
	        
	      }
	    );


	}





);


