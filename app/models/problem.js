import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  difficulty: DS.attr(),
  tests: DS.hasMany('test', {async: true})
});
