import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('developer', params.developer_id);
  },
  actions: {
    complete(developer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          developer.set(key, params[key]);
        }
      });
      developer.save();
      this.transitionTo('developer', developer.id);
    }
  }
});
