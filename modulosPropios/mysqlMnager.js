
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

function consultar2(query){
	
	return new Promise(
		(resolve,reject)=>{
			coneccion.query(query,
				(error,resultados,fila)=>{
					if(error){
						reject(error);
					}
					else{
						obj={
							'resultados':resultados,
							'fila':fila
						}

						resolve(obj);
					}
					
				}
			
			);
	
		}
	);
	
}

exports.consultar = consultar;
exports.consultar2= consultar2;
