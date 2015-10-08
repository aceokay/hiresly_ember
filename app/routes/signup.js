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

    signUp(info, context) {
      var ref = new Firebase("https://hiresly.firebaseio.com/");
      var params = info;
      var _this = this;
      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          alert(error);
        } else {
          alert("Successfully created user account with uid:" + userData.uid);
          // window.location.reload(true);
          params.userId = userData.uid;
          ref.child("developers").child(userData.uid).set({
            name: null,
            email: params.email,
            uid: params.userId,
          });
          _this.transitionTo('developer', params.userId);
        }
      });
    },
  }
});
