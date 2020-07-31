test('test de file',

	async ()=>{

		url = "./uploads/noImage.png";


				file = require('./modulosPropios/fileManager.js');

				test = await file.init2(url);
				console.log(Buffer.isBuffer(test.data));


				expect(test.data).not.toBeUndefined();
				expect(test.mime).not.toBeUndefined();
				expect(Buffer.isBuffer(test.data)).toBeTruthy();
				expect(test.mime).toBe('image/png');
				

				

	}

);