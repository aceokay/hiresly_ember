import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      developer: this.store.findRecord('developer', params.developer_id),
      problems: this.store.findAll('problem'),
      showTest: false,
      liveTests: [],
      completedTests: []
    })
  },
  afterModel: function(model){
    if (model.developer.get('tests').get('length') !== 0) {
      model.showTest = true;
    };
    model.developer.get('tests').forEach(function(test) {
      // debugger;There's work to be done here.
      if (test.get('startTime') === null) {
        model.liveTests.push(test);
      } else {
        model.completedTests.push(test);
      }
    })
  },
  actions: {
    complete(developer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          developer.set(key, params[key]);
        }
      });
      developer.save();
      this.transitionTo('developer', developer.id);
    },
    startTest(params) {
      var newTest = this.store.createRecord('test', params);
      newTest.save();
      params.testTaker.save();
      params.problem.save();
      this.transitionTo('developer', params.testTaker.id);
    }
  }
});
