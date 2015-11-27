import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        return this.store.findAll('todo');
    },
    actions: {
        createTodo(novoTitulo) {
            this.store.createRecord('todo', {
                descricao: novoTitulo,
                concluido: false
            }).save();
        },
       updateTodo(todo) {
           todo.save();
       },
       deleteTodo(todo) {
           todo.destroyRecord();
       }
    }
});