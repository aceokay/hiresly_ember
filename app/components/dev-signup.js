import Ember from 'ember';

export default Ember.Component.extend({
  addNewDev: false,
  actions: {
    devFormShow() {
      this.set('addNewDev', true);
    },
    save() {
      var params = {
        name: null,
        address: null,
        email: this.get('email'),
        password: this.get('password')
      };
      this.set('addNewDev', false);
      this.sendAction('saveNewDev', params);
    },

    signUp() {
      var params;
      params = {
        email: this.get('email'),
        password: this.get('password')
      };
      var context = this;
      this.sendAction('signUp', params, context);
      debugger;
    },
  }
});
