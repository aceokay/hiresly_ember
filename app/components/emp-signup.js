import Ember from 'ember';

export default Ember.Component.extend({
  addNewEmp: false,
  actions: {
    empFormShow() {
      this.set('addNewEmp', true);
    },
    save() {
      var params = {
        company: null,
        address: null,
        email: this.get('email'),
        password: this.get('password')
      };
      this.set('addNewEmp', false);
      this.sendAction('saveNewEmp', params);
    }
  }
});
