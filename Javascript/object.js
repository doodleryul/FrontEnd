// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of object
// object = {key:value}; dictionary형태
console.log('1. Literals and preperties');
// 2가지방법
const ob1 = {}; //'object literal' syntax
const ob2 = new Object(); // 'object constructor' syntax


function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const rimiiii = {name: 'rimiiii', age: 4};
print(rimiiii)

// 뒤늦게 추가
rimiiii.hasJob = false;
console.log(rimiiii.hasJob);

// 뒤늦게 삭제도 가능
delete rimiiii.hasJob;
console.log(rimiiii.hasJob);

// 2. computed properties
console.log('\n2. computed properties');
console.log(rimiiii.name); //method1, 정확할때
console.log(rimiiii['name']); //method2 정확하게 어떤 키가 필요한지 모를때
rimiiii['hasJob'] = false;
console.log(rimiiii.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); //어떤 키일지 모름
}
printValue(rimiiii, 'name');
printValue(rimiiii, 'age');

// 3. Property value shorthand
// 똑같은 일들을 반복할때
console.log('\n3. Property value shorthand');
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = Person('rimiiii', '5');
console.log(person4);

// 4. Constructor function
console.log('\n4. Constructor function');
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('\n5. in operator')
console.log('name' in rimiiii);
console.log('age' in rimiiii);
console.log('random' in rimiiii);
console.log(rimiiii.random);


// 6. for..in vs for..of
console.clear();
console.log('\n6. for..in vs for..of')
// for (key in obj)
for (key in rimiiii) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
console.log('\n7. Fun cloning')
const user = {name: 'rimiiii', age: '20'};
const user2 = user;
//user2.name = 'coder';
console.log(user); //coder로 바뀜

// old way
const user3 = {};
for (key in user) { 
  user3[key] = user[key];
}
console.log(user3);

// new way
// method1
const user4 = {};
Object.assign(user4, user);

// method2
//const user4 = Object.assign({}, user);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit2, fruit1); //앞에있는게 덮어씌워짐
// 없으면 그냥 둠
console.log(mixed.color);
console.log(mixed.size);
