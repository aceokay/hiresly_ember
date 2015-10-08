import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    completeProfile(developer) {
      var params = {
        name: this.get('name'),
        email: developer.get('email'),
        tests: developer.get('tests'),
        completedTests: developer.get('completedTests'),
        liveTests: developer.get('liveTests'),
        userId: developer.get('id')
      };
      this.sendAction('complete', developer, params);
    }
  }
});
