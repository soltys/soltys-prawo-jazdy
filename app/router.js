import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('attempts',function(){
  this.resource('attempt', { path:'/:attempt_id'});	
  });

  this.route('about');
});
