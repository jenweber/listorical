import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists');
  // this.route('lists', {path: 'string'}) <<< how to name your urls 
  this.route('list');
});

export default Router;
