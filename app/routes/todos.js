import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        return this.store.findAll('todo');
    },
    actions: {
        createTodo(novoTitulo) {
            let coment = this.store.peekRecord('comentario',1);
            let todo = this.store.createRecord('todo', {
                descricao: novoTitulo,
                concluido: false,
            });
            coment.get('comentario').pushObject(todo);
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