import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeStudent(){
      this.get('students').popObject()
    }
  },
  teacher: 'Mrs Robinson',
  students: ['john', 'mary', 'bob', 'sue'],
  classSize: Ember.computed('students.length', function(){
    return this.get('students').length;
  })
});
