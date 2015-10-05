import Ember from 'ember';

export default Ember.Component.extend({
  addNewDev: false,
  actions: {
    devFormShow() {
      this.set('addNewDev', true);
    }
  }
});
