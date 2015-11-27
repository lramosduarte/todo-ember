import Ember from 'ember';

export default Ember.Component.extend({  
    actions: {
        submitTodo(novoItem) {
            if (novoItem) {
                this.sendAction('action', novoItem);
            }
            this.set('novoItem', '');
        }
    }
});