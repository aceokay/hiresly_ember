import Ember from 'ember';

export default Ember.Component.extend({
  empLogin: false,
  actions: {
    empLoginShow() {
      this.set('empLogin', true);
    }
  }
});
