import Ember from 'ember';  
import config from './config/environment';

var Router = Ember.Router.extend({  
  location: config.locationType
});

Router.map(function() {
  this.route('todos', function() {
    this.route('concluidos');
    this.route('ativos');
  });
  this.route('comentario');
});

export default Router;