import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    startTest(problems) {
      var problemSelect = problems.get('firstObject');
      var params = {
        problem: problemSelect,
        testTaker: this.get('developer'),
        githubUrl: null,
        videoUrl: null,
        startTime: Date.now(),
        finishTime: null
      }
      this.sendAction('startTest', params);
    }
  }
});
