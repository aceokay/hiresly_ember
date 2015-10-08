import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      developers: this.store.findAll('developer'),
      employers: this.store.findAll('employer')
    });
  },

  actions: {
    signIn: function(email, password) {
      this.get("mysession").open("firebase", {
        provider: 'password',
        email: email,
        password: password
      });
    }
  }
});
