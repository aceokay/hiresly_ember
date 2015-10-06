import Ember from 'ember';

export default Ember.Component.extend({
  showTest: false,
  actions: {
    startTest() {
      var params = {
        // problem: We need to serve the problem model into the template to grab and assign here
        testTaker: this.get('developer'),
        githubUrl: null,
        videoUrl: null,
        startTime: Date.now(),
        finishTime: null
      }
    }
  }
});
