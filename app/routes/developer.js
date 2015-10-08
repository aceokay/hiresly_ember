import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      developer: this.store.findRecord('developer', params.developer_id),
      problems: this.store.findAll('problem'),
      showTest: false
    })
  },
  afterModel: function(model){
    if (model.developer.get('tests').get('length') !== 0) {
      model.showTest = true;
    };
    // var tests = model.developer.get('tests').then(function(tests) {
    //   tests.forEach(function(test)
    //    {
    //      debugger;
    //     if (test.get('finishTime') === undefined) {
    //       model.liveTests.push(test);
    //     } else {
    //       model.completedTests.push(test);
    //     }
    //   });
    // });
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
      // debugger;
      // params.developer.get('tests').addObject(newTest);
      params.developer.save();
      // params.problem.get('tests').addObject(newTest);
      params.problem.save();
      // this.model.reload();
      this.transitionTo('developer', params.developer.id);
    }
  }
});
