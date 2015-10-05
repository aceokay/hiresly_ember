import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.attr(),
  address: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  interests: DS.hasMany('developer', {async: true})
});
