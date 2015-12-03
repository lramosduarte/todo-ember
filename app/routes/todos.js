import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        /*return Ember.RSVP.hash({
          todo: this.store.findAll('todo'),
          comentarios: this.store.findAll('comentario')
        });*/
        return this.store.findAll('todo');
    },
    /*setupController(controller, models){
        controller.set('todos', models.todo);
        controller.set('comentarios', models.comentario);
    },*/
    actions: {
        createTodo(novoTitulo) {
            let todo = this.store.createRecord('todo', {
                descricao: novoTitulo,
                concluido: false,
            });
            todo.save();
        },
       updateTodo(todo) {
           todo.save();
       },
       deleteTodo(todo) {
           todo.destroyRecord();
       }
    }

});