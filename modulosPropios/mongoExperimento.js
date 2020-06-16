




function init(option,callback){

	switch(option){

		case 'nativo':


			const connection = require('./conectMongo.js');

			const init = async () => {
			  const db = await connection(); // obtenemos la conexión

			  await db.collection('user').insertOne({ // insertamos un usuario
			    name: 'devsin.site'
			  });
			  

			 db.collection('user').find({name:'devsin.site'},

			 	function(err, result){
			 		console.log(result);

			 	}
			 );

			 // callback(JSON.stringify(resultado));

			};

			init();


		break;


		case 'mongoose':

			var mongoose = require('mongoose');

			mongoose.connect('mongodb://localhost:27017/testDB', {
				  useNewUrlParser: true,
				  useUnifiedTopology: true
				}
			);

			const db = mongoose.connection;
			db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
			db.once('open', () => {
			  console.log('connected'); // si esta todo ok, imprime esto
			});


		break;



	}


}




exports.init= init;