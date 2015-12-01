import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	//host: 'http://localhost:50081',
	host: 'http://localhost:49698',
	namespace: 'api'
});
