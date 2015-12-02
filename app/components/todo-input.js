import Ember from 'ember';

export default Ember.Component.extend({  
    actions: {
        submitTodo(novoTitulo) {
            if (novoTitulo) {
                this.sendAction('action', novoTitulo);
            }
            this.set('novoTitulo', '');
        },
    }
});