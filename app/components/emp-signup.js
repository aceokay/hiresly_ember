import Ember from 'ember';

export default Ember.Component.extend({
  addNewEmp: false,
  actions: {
    empFormShow() {
      this.set('addNewEmp', true);
    }
  }
});
