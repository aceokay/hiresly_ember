import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  tests: DS.hasMany('test', {async: true}),
  completedTests: Ember.computed('tests.@each.finishTime', function() {
    return this.get('tests').filter(function(test) {
      if(test.get('finishTime') !== undefined) {
        return true;
      }
    });
  }),
  liveTests: Ember.computed('tests.@each.startTime', function() {
    return this.get('tests').filter(function(test) {
      if(test.get('finishTime') === undefined) {
        return true;
      }
    });
  })
});
