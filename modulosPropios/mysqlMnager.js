
var mysql = require('mysql');

var coneccion=mysql.createConnection({
	host : 'localhost',
	database : 'firsapp',
	user : 'root',
	password : 'superiranad',
});


function consultar(query,callback,errorCallback){
	
	coneccion.query(query,
		(error,resultados,fila)=>{
			if(error){
				errorCallback(error);
			}
			else{
				callback(resultados,fila);
			}
			
		}
	
	);
	
	
	
}

exports.consultar = consultar;
