import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('lists', {path: 'string'}) <<< how to custom name your urls
  this.route('lists', function() {
    this.route('list', {path: '/:list_id'});
  });
  // this.route('lists');
  // this.route('list', {path: 'lists/:list_id'});
});


export default Router;
