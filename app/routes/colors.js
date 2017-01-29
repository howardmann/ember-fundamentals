import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return ['black', 'red', 'green', 'yellow', 'purple']
  }
});
