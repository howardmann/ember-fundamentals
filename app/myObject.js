import Ember from 'ember';

export default function(){
  const Light = Ember.Object.extend({
    isOn: false,
    watchIsOn: Ember.observer('isOn', function(){
      console.log('isOn is now: ' + this.get('isOn'));
    }),
    wattage: 70,
    volts: 40,
    wattsVolt: Ember.computed('wattage', 'volts', function(){
      return this.get('wattage') + this.get('volts');
    }),
    voltWatts: Ember.computed.alias('wattsVolt')
  });

  Light.reopen({
    color: 'black'
  });
  console.log("Ember object get set, computed and observer");
  let bulb = Light.create();
  console.log(bulb.get('isOn'));
  bulb.set('isOn', true);
  console.log(bulb.get('color'));

  console.log(bulb.get('wattsVolt'));
  bulb.set('wattage', 100);
  console.log(bulb.get('wattsVolt'));
  console.log(bulb.get('voltWatts'));

  const Mother = Ember.Object.extend({
    mood: 'angry',
    age: 31,
    milk: true
  });

  const Baby = Ember.Object.extend({
    age: 1,
    mother: null,
    mood: Ember.computed.alias('mother.mood'),
    milk: Ember.computed.oneWay('mother.milk')
  });

  let hela = Mother.create();
  let felix = Baby.create({mother: hela});

  console.log("Mother and baby 2-way/ 1-way data binding");
  // Mother and baby share a mood so it is a Ember.computed.alias
  // E.g. if baby is angry mum is angry, if mum is upset baby is upset and vice versa
  console.log(hela.get('mood'));
  console.log(felix.get('mood'));
  hela.set('mood', 'angry');
  console.log(felix.get('mood'));
  felix.set('mood', 'happy');
  console.log(hela.get('mood'));

  // Milk is a one way binding relationship via Ember.computed.oneWay
  // E.g. if mum has or hasn't got milk then baby has the same
  // However, if baby for some reason got milk from somewhere else, doesn't mean mum has milk
  console.log(hela.get('milk'));
  console.log(felix.get('milk'));
  hela.set('milk', false);
  console.log(felix.get('milk'));
  felix.set('milk', true);
  console.log(felix.get('milk'));
  console.log(hela.get('milk'));

  // Enumerable helpers - the same as JS except filterBy, mapBy and findBy. mapBy is the same as pluck in underscore and ruby
  console.log("Enumerable helpers");
  let arr = [1,2,3,4,5];
  let doubleArr = arr.map(el => el * 2);
  console.log(doubleArr);

  let even = arr.filter(el => el % 2 === 0);
  console.log(even);

  let objArr = [{name: 'john', age:21}, {name: 'gal', age:31}, {name: 'ben', age:12}, {name: 'collie', age:61}, {name: 'john', age: 13}];

  let names = objArr.mapBy('name');
  let ages = objArr.mapBy('age');
  console.log(names);
  console.log(ages);

  let firstJohn = objArr.findBy('name', 'john');
  console.log(firstJohn);

  let allJohns = objArr.filterBy('name', 'john');
  console.log(allJohns);

  // Chaining enumerables
  let doubleAges = objArr.mapBy('age').map(el => el * 2);
  console.log(doubleAges);



}
