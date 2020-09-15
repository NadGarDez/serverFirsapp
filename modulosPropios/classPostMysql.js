 class PostMysql {

 	

 	constructor(req){


 		this.req = req;
 		this.campos;
 		this.post = require('./manejadorPost.js');
		this.mysql = require('./mysqlMnager.js');
		this.seguridad = require('mysql'); 


		//this.buscarCampos();


 	}


 	accion(){


 		//implementar
 	}

 	async buscarCampos(){


 		try {

			dataPost= await this.post.init2(this.req,1);
			this.campos = dataPost.campos;

		}
		catch(error){

			console.log(error);

		}

		if(error){

			return error;
		}

		else{

			return true;
		}

 	}


 	async consulta(consulta){

 		try {

			mysqlResult= await this.mysql.consultar2(consulta);
			console.log(mysqlResult);
		}

		catch(error){

			console.log(error);
		}

		if(!error){

			return mysqlResult;

		}

		else{

			return error;
		}
 		

 	}









 }

 exports.class = PostMysql;


 /*

	tabla de citas



	id
	psicologo not null
	pasciente default null
	hora inicio time
	hora fin time
	block bool
	fecha
	duracion 
	pagado bool default 0


	CREATE TABLE citas(
    -> id int NOT NULL AUTO_INCREMENT,
    -> psicologo int NOT NULL,
    -> horaInicio time,
    -> horaFin time,
    -> block bit default 0,
    -> pasciente int default null,
    -> fecha date,
    -> duracion int,
    -> pagado bit default 0,



    datos necesarios para añadir 

    	id del psicologo
    	hora de inicio
    	hora fin
    	fecha
    	duracion
    	accion



 */