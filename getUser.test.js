modulo = require('./modulosPropios/getUser.js');
var mysql = require('./modulosPropios/mysqlMnager.js');
ini = require('./modulosPropios/');

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

		var data ='id=4';
    
	    ini("http:\//167.71.173.198:3000/getUser",true,null,data,'post','json',
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