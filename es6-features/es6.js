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
