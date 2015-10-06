import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  bosy: DS.attr(),
  author: DS.attr(),
  difficulty: DS.attr()
});
