import DS from 'ember-data';

export default DS.Model.extend({
	descricao: DS.attr('string'),
    concluido: DS.attr('boolean'),
    comentario: DS.hasMany('comentario')
});
