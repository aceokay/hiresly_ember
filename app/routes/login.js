import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      developers: this.store.findAll('developer'),
      employers: this.store.findAll('employer')
    });
  }
});
