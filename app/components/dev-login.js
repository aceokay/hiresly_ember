import Ember from 'ember';

export default Ember.Component.extend({
  devLogin: false,
  actions: {
    devLoginShow() {
      this.set('devLogin', true);
    },
    devSelect() {
      var devId = this.get('select');
      debugger;
      this.sendAction('saveNewDev', devId);
    }
  }
});
