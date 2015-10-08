import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    startTest(problems) {
      var problemSelect = problems.get('firstObject');
      var params = {
        problem: problemSelect,
        developer: this.get('developer'),
        githubUrl: null,
        videoUrl: null,
        startTime: Date.now(),
        finishTime: null
      }
      this.sendAction('startTest', params);
    },
    submitAnswer(test) {
      var params = {
        githubUrl: this.get('githubUrl'),
        videoUrl: this.get('videoUrl'),
        finishTime: Date.now()
      };
      this.sendAction("submitAnswer", test, params);
    }
  }
});
