import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get("mysession").fetch().catch(function() {});
  },

  model() {
    return Ember.RSVP.hash({
      developers: this.store.findAll('developer'),
      employers: this.store.findAll('employer')
    });
  },

  actions: {
    signIn: function(params, context) {
      var ref = new Firebase("https://hiresly.firebaseio.com/");
      var _this = this;
      ref.authWithPassword({
        email: params.email,
        password: params.password
      }, function(error, authData) {
        if (error) {
          alert(error);
          window.location.reload();
        } else {
          _this.transitionTo('developer', authData.uid);
        }
      });
    }
  }
});
