import Ember from 'ember';

export default Ember.Component.extend({
  devLogin: false,
  actions: {
    devLoginShow() {
      this.set('devLogin', true);
    },

    signIn() {
      var params;
      params = {
        email: this.get('email'),
        password: this.get('password')
      };
      var context = this;
      this.sendAction('signIn', params, context);
    },
  }
});
