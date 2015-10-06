import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    completeProfile(employer) {
      var params = {
        address: this.get('address')
      };
      this.sendAction('complete', employer, params);
    }
  }
});
