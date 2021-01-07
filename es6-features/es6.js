//Destructuring
//OLD JS

var user = {
  name: 'Ed',
  age: 25
};

var myName = user.name;
console.log(myName);

//ES6

const list = {
  name: 'Shopping List',
  items: ['Milk','Cow'];
}

const {name,items} = list;

console.log(name,items);


/* Arrow Functions */

//OLD JS

function sayName(){
  console.log('Hello I am Ed');
}

var sayAge = function(){
  console.log('My age is, well I don/t wanna tell you');
}

sayName();
sayAge();

//ES6

const sayLocation = location => console.log(`my location is ${location}`);


sayLocation('paris')

//Default Parameters

//OLD JS
function multiply(x,y){
  var a = x || 1;
  var b = y || 1;
  console.log(a*b);
}

multiply(5,10);
