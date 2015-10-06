import DS from 'ember-data';

export default DS.Model.extend({
  problem: DS.hasMany('problem', {async: true}),
  githubUrl: DS.attr(),
  videoUrl: DS.attr(),
  startTime: DS.attr(),
  finishTime: DS.attr()
});
