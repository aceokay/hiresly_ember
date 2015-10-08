import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    startTest(params) {
      this.sendAction('startTest', params);
    },
    submitAnswer(test, params) {
      this.sendAction("submitAnswer", test, params);
    }
  }
});
