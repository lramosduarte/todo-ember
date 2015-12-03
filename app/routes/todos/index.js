import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        return this.store.findAll('todo');
    },
    renderTemplate(controller, model) {
        this.render('todos.index', {
            model: model
        });
    }
});