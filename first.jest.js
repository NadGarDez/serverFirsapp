modulo = require('./modulosPropios/getUser.js');

test('probar consulta', () => {
	function proc(resultados,fila){
		expect(resultados).not.toBeUndefined();
	}
	obj={'id':4};
	file="";
	
  	callbackPost(obj,file,proc);
});