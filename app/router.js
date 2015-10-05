import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('developer', {path: '/developer/:developer_id'});
  this.route('employer', {path: '/employer/:employer_id'});
});

export default Router;
