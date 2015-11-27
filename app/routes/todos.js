import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        /*let todos = [
            {
                descricao: "Learn Ember",
                concluido: false,
            },
            {
                descricao: "Solve World Hunger",
                concluido: false,
            }
        ];
        return todos;*/
        return this.store.findAll('todo');
    },
    actions: {
        createTodo(novoItem) {
           this.store.createRecord('todo', {
               descricao: novoItem,
               concluido: false
           }).save();
        }
    }
});