import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNewDev(params) {
      var newDev = this.store.createRecord('developer', params);
      newDev.save();
      this.transitionTo('developer', newDev.id);
    },
    saveNewEmp(params) {
      var newEmp = this.store.createRecord('employer', params);
      newEmp.save();
      this.transitionTo('employer', newEmp.id);
    },

    signUp(params, context) {
      var ref = new Firebase("https://hiresly.firebaseio.com/");
      debugger;
      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          alert(error);
        } else {
          alert("Successfully created user account with uid:" + userData.email.toString());
          window.location.reload(true);
        }
      });
    }
  }
});
