import DS from 'ember-data';

export default DS.Model.extend({
  problem: DS.belongsTo('problem', {async: true}),
  testTaker: DS.belongsTo('developer', {async: true}),
  githubUrl: DS.attr(),
  videoUrl: DS.attr(),
  startTime: DS.attr(),
  finishTime: DS.attr()
});
