import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		var comentario = [{
			"id":1,
			"comentarios":"teste1",
			"tarefas_id":1,
			"tarefas1":null

		},{
			"id":3,
			"comentarios":"teste2",
			"tarefas_id":1,
			"tarefas1":null
		}]
		
		//return this.store.find('comentario',params.tarefas_id);
	}
});
