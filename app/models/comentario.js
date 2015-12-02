import DS from 'ember-data';

export default DS.Model.extend({
	comentario : DS.attr("string"),
	todo:  DS.belongsTo('todo')
});
