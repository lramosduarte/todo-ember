import Ember from 'ember';

export default Ember.Component.extend({
	 tagName: 'li',
    classNameBindings: ['editing'],
    editing: false,
    actions: {
    	editTodo(){
    		this.toggleProperty('editing');
    	},
    	cancelEdit(){
    		this.set('editing', false);
    	},
    	submitTodo(){
    		let todo = this.get('todo');
    		if (todo.get('descricao') === "") {
    			this.sendAction('deleteTodo', todo);
    		}else{
    			this.sendAction('updateTodo', this.get('todo'));
    		}
    		this.sendAction('editing', false);
    	},
    	deleteTodo(){
    		let todo = this.get('todo');
    		this.sendAction('deleteTodo', todo);
    	}
    }
});
