import DS from 'ember-data';

export default DS.Model.extend({
	comentarios : DS.attr("string"),
	tarefas_id:  DS.attr("number"),
	todo: DS.belongsTo('todo')
});
