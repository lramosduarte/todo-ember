import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  serialize(snapshot, options) {
    var json = this._super(...arguments);

    delete json.comentario.tarefas1;
    return json;
  },
});