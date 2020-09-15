test('test class',

	async ()=>{

		


				file = require('./modulosPropios/espacios.js');

				console.log(file)

				var hola = await file.ini;
				
				console.log(typeof hola);

				expect(hola).not.toBeUndefined();

				expect(hola).toBe('positivo');

				

	}

);