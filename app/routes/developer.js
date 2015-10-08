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
      params.developer.save();
      params.problem.save();
      this.transitionTo('developer', params.developer.id);
    },
    submitAnswer(test, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          test.set(key, params[key]);
        }
      });
      test.save();
      this.transitionTo('developer', test.developer.id)
    }
  }
});
