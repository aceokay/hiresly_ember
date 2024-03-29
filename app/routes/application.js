import Ember from 'ember';

export default Ember.Route.extend({
  loginForm: false,

  beforeModel: function() {
    return this.get('mysession').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get("mysession").open("firebase", { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get("mysession").close();
      this.transitionTo('/');
    },

    transitionTo: function(mysession) {
      this.transitionTo('developer', mysession.content.uid);
    }
  }
});
