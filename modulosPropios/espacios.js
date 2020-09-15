var padre = require('./classPostMysql');



class espacios extends padre.class{



	constructor(req){
		super(req);
	}

	async accion(){


		return new Promise(
			async (resolve,reject)=>{
				
				if(this.buscarCampos()){


					switch(this.campos.accion){


						case 'ingresar':

							var consulta = `INSERT INTO citas (psicologo,horaInicio,horaFin,fecha,duracion) values (${this.campos.psicologo},${this.campos.time},${this.campos.timeFin},${this.campos.date},1)`;

							var resultados = await this.consulta(consulta);

						break;

						case 'eliminar':

							var consulta = `DELETE FROM citas WHERE id=${this.campos.id}`;

							var resultados = await this.consulta(consulta);


						break;


						case 'mostrar':

							var consulta = `SELECT * FROM citas WHERE psicologo=${this.campos.psicologo}`;

							var resultados = await this.consulta(consulta);

						break;

						case 'bloquear':

							var consulta = `UPDATE citas SET (block = 1) WHERE id=${this.campos.id}`;

							var resultados = await this.consulta.(consulta);

						break;

						case 'agregarPasciente':

							var consulta = `UPDATE citas SET (pasciente = ${this.campos.pasciente}, pagado=1) WHERE id=${this.campos.id}`;

							var resultados = await this.consulta.(consulta);


						break;
					}

					

					resolve(JSON.stringify(resultados.resultados));


				}

			}


		)
	}
}


exports.ini = espacios;

/*
	talento@clickpanda.com

*/