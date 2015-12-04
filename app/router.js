import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', {path: '/todos'}, function() {
    this.route('concluidos');
    this.route('ativos');
    this.route('comentarios');//, {path: ':tarefas_id/comentarios'});
  });
  this.route('comentarios', {path: ':tarefas_id'});//, {path: '/comentarios'});//, {path: '/todos/todos/:tarefas_id/comentarios'});
});

export default Router;