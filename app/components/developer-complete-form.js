import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    completeProfile(developer) {
      var params = {
        name: this.get('name')
      };
      this.sendAction('complete', developer, params);
    }
  }
});
