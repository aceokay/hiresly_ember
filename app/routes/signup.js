import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNewDev(params) {
      var newDev = this.store.createRecord('developer', params);
      newDev.save();
      this.transitionTo('developer', newDev.id);
    }
  }
});
