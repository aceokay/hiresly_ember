import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('employer', params.employer_id);
  },
  actions: {
    complete(employer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          employer.set(key, params[key]);
        }
      });
      employer.save();
      this.transitionTo('employer', employer.id);
    }
  }
});
