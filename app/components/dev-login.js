import Ember from 'ember';

export default Ember.Component.extend({
  devLogin: false,
  actions: {
    devLoginShow() {
      this.set('devLogin', true);
    }
  }
});
