import Ember from 'ember';
let $ = Ember.$;

export default Ember.Route.extend({
  actions: {
    toggleHide(){
      console.log(this.get('isHide'));
    },
    pressed(text){
      console.log(text);
    },
    formSubmit(orange, apple, pear){
      console.log(orange);
      console.log(apple);
      console.log(pear);
    },
    valuePass(val){
      console.log(val);
    }
  },
  isHide: 'banana',
  // // For debugging purposes
  // model(){
  //   var obj = Ember.Object.extend({
  //     type: 'banana'
  //   });
  //   var fruit = obj.create();
  //   return fruit
  // }
});
