'use strict';
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(Obj)
console.log('1. Object to JSON');
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(name+' can jump!');
  }
};

// symbol, jump 함수는 제외됨
console.log('\n#symbol, jump 함수는 제외됨')
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 목록만 변환할 수 있음
console.log('\n#원하는 목록만 변환할 수 있음')
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'rimiiii' : value;
})
console.log(json);

// 2. JSON to Object
// parse(json)
console.log('\n2. JSON to Object');
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); 실행되지 않음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); error -> string이 됐기 때문
console.log(obj.birthDate.getDate());
