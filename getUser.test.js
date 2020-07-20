modulo = require('./modulosPropios/getUser.js');
var mysql = require('./modulosPropios/mysqlMnager.js');

test('probar consulta mysql', () => {
	var consulta = "SELECT * FROM usuario WHERE id=4";
	return mysql.consultar2(consulta).then(
		data=>{
			expect(data).not.toBeUndefined();
			console.log(data);
		}
	)
	
	
});////////////