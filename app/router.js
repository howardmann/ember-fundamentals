import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('input');
  this.route('students');
  this.route('pupils');
  this.route('colors');
});

export default Router;
